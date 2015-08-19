define([
    'backbone',
    'backbonefire',
    'models/items/ButtonModel',
    'models/items/ItemModel'
], function (Backbone, bbfire, ButtonModel, ItemModel) {
    "use strict";

    var ButtonsCollection;

    ButtonsCollection = Backbone.Firebase.Collection.extend({
        model: ButtonModel,

        comparator: 'date',

        initialize: function () {
           var self = this;

            this.listenTo(this, 'all', function (eventName) {
                console.info('Buttons Collection', eventName);
            });
        }      
    });

    return ButtonsCollection;
});