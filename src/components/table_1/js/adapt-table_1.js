define([
    "core/js/adapt",
    "core/js/views/componentView"
], function (Adapt, ComponentView) {

    var ComponentName = ComponentView.extend({

        preRender: function () {
            console.log("preRender");
            //here is a good place to add any code you want to run prior to the component being rendered
        },

        postRender: function () {
            console.log("postRender");
            // IMPORTANT!
            // Both of the following methods need to be called inside your view.

            // Use this to set the model status to ready.
            // It should be used when telling Adapt that this view is completely loaded.
            // This is sometimes used in conjunction with imageReady.
            this.setReadyStatus();

            // Use this to set the model status to complete.
            // This can be used with inview or when the model is set to complete/the question has been answered.
            this.setCompletionStatus();

            var partialname = this.model.get("pratial_name");
            console.log("partial name is " + partialname);
        }

    }, {
        template: "table_1"
    });

    return Adapt.register("table_1", ComponentName);
});
