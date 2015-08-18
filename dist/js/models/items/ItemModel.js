define([
    'backbone'
], function (Backbone) {
    "use strict";

    var ItemModel;
    ItemModel = Backbone.Model.extend({
        initialize: function () {
            this.listenTo(this, 'all', function (eventName) {
                console.log('Item Model', eventName)
            });
        },
        defaults: {
            date: (new Date()).getTime(),
            sum: 0,
            category: 'Other',
            source: 'Cash'
        }
    });

    return ItemModel;
});