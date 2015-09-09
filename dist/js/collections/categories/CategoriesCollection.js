define([
    'backbone',
    'backbonefire',
    'modules/authorization',
    'models/categories/CategoryModel'
], function (Backbone, bbfire, AuthModule, CategoryModel) {
    "use strict";

    var CategoryCollection;

    CategoryCollection = Backbone.Firebase.Collection.extend({
        model: CategoryModel,

        initialize: function () {
            this.setUrl();
            this.listenTo(this, 'all', function (eventName) {
                console.info('Category Collection', eventName)
            });
        },
        setUrl: function () {
            var uid = AuthModule.getUserData().uid,
                ref = AuthModule.rootRef;
            this.url = ref.child('category').child(uid);
        }
    });

    return CategoryCollection;
});