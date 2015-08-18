define([
    'backbone',
    'backbonefire',
    'modules/authorization',
    'models/items/ItemModel'
], function (Backbone, bbfire, AuthModule, ItemModel) {
    "use strict";

    var ItemsCollection;

    ItemsCollection = Backbone.Firebase.Collection.extend({
        model: ItemModel,

        comparator: 'date',
        initialize: function () {
            this.setUrl();
            this.listenTo(this, 'all', function (eventName) {
                console.info('Items collection', eventName)
            });
        },
        setUrl: function () {
            var uid = AuthModule.getUserData().uid,
                ref = AuthModule.rootRef;
            this.url = ref.child('items').child(uid);
        }
    });

    return ItemsCollection;
});