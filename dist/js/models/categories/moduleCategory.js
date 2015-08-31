define([
    'backbone'
], function (Backbone) {
    "use strict";

    var CategoryModel;
    CategoryModel = Backbone.Model.extend({
        initialize: function () {
            this.listenTo(this, 'all', function (eventName) {
                console.log('Category Model', eventName)
            });
        }
    });

    return CategoryModel;
});