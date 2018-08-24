define([
    'core/js/adapt',
    'core/js/views/adaptView',
    'core/js/views/articleView'
], function (Adapt, AdaptView, ArticleView) {
    var PageView = AdaptView.extend({
        className: function () {
            return "page " +
                this.model.get('_id') +
                " " + this.model.get('_classes') +
                " " + this.setVisibility() +
                " " + (this.model.get('_isComplete') ? 'completed' : '');
        },
        preRender: function () {
//plugin part 1 connecting my custom onscroll to THIS view scrol event, na obiekcie window wywoluje sie event dla view
            
           $(window).scroll(this.onScroll.bind(this));
            
//plugin part 1
            this.disableAnimation = Adapt.config.has('_disableAnimation') ? Adapt.config.get('_disableAnimation') : false;
            this.$el.css('opacity', 0);
            this.listenTo(this.model, 'change:_isReady', this.isReady);
            var accessibility = Adapt.config.get('_accessibility');
            if (!accessibility._isEnabled && !accessibility._isEnabledOnTouchDevices) {
                return;
            }
            // create aria-label outside of #wrapper
            this.$pageLabel = $('<div/>', {
                'class': 'aria-label relative a11y-ignore-focus prevent-default',
                tabindex: 0,
                role: 'region',
                text: Adapt.course.get('_globals')._accessibility._ariaLabels.pageEnd
            }).appendTo('body');
        },
        isReady: function () {
            if (this.model.get('_isReady')) {
                _.defer(_.bind(function () {
                    $('.loading').hide();
                    $(window).scrollTop(0);
                    Adapt.trigger('pageView:ready', this);
                    var styleOptions = {
                        opacity: 1
                    };
                    if (this.disableAnimation) {
                        this.$el.css(styleOptions);
                        $.inview();
                    } else {
                        this.$el.velocity(styleOptions, {
                            duration: 'fast',
                            complete: function () {
                                $.inview();
                            }
                        });
                    }
                    $(window).scroll();
                }, this));
            }
        },
//plugin part 2
        onScroll: function () {
            this.checkscrollposition();
        },
        checkscrollposition: function (event) {
            if (this.model.get("scrollchanger")) {
                var windowscroll = $(window).scrollTop();
                var modelitems = (this.model.toJSON()).scrollchanger._items;
//toJSON required to turn it into readable object
                _.each(modelitems, function (item) {
                    var itemid = item._id;
                    var itemmodel = Adapt.findById(itemid);
                    var domitempositiontop = ($("." + itemid).offset()).top - 500;
                    var domitemheight = $("." + itemid).height() + domitempositiontop;
                    if (windowscroll > domitempositiontop && windowscroll < domitemheight) {
//place content or class
                        $('.page-body-inner').html("win for" + item.class);
//place content or class
                    } else {
                        console.log(windowscroll + " " + itemid + " " + domitempositiontop + " " + domitemheight);
                    }
                });
            }
        },
//plugin part 2
        remove: function () {
            if (this.$pageLabel) {
                this.$pageLabel.remove();
            }
            AdaptView.prototype.remove.call(this);
        }
    }, {
        childContainer: '.article-container',
        childView: ArticleView,
        type: 'page',
        template: 'page'
    });
    return PageView;
});
