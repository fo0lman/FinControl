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
        },

        validate: function ( attrs ) {
            if (!attrs.title) {
                return 'Please fill name field';
            }
        }
    });

    return CategoryModel;
});