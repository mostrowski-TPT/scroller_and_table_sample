define([
    'core/js/adapt',
    'core/js/views/adaptView'
], function (Adapt, AdaptView) {

//    var AdaptViewInitialize = AdaptView.prototype.initialize;
//    AdaptView.prototype.initialize = function (options) {
//
//    
////
////        _.extend(this, {
////            preRender: function () {
////             $(window).scroll(this.onScroll.bind(this));
////            },
////            
////            onScroll: function () {
////                
////                  this.checkscrollposition();
////                
////                  
////        },
////        checkscrollposition: function (event) {
////            if (this.model.get("scrollchanger")) {
////                var windowscroll = $(window).scrollTop();
////                var modelitems = (this.model.toJSON()).scrollchanger._items;
////                //toJSON required to turn it into readable object
////                _.each(modelitems, function (item) {
////                    var itemid = item._id;
////                    var itemmodel = Adapt.findById(itemid);
////                    var domitempositiontop = ($("." + itemid).offset()).top - 500;
////                    var domitemheight = $("." + itemid).height() + domitempositiontop;
////                    if (windowscroll > domitempositiontop && windowscroll < domitemheight) {
////                        //place content or class
////                        $('.page-body-inner').html("win for" + item.class);
////                        //place content or class
////                    } else {
////                        console.log(windowscroll + " " + itemid + " " + domitempositiontop + " " + domitemheight);
////                    }
////                });
////            }
////        }
////          
////        });
////
////        var returnValue = AdaptViewInitialize.apply(this, arguments);
////
////        return returnValue;
//
//
//    };

});
