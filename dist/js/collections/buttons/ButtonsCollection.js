define([
    'backbone',
    'backbonefire',
    'modules/authorization',
    'models/buttons/ButtonModel'

], function (Backbone, bbfire, AuthModule, ButtonModel) {
    "use strict";

    var ButtonsCollection;

    ButtonsCollection = Backbone.Firebase.Collection.extend({
        model: ButtonModel,
        initialize: function () {
            this.setUrl();
            this.listenTo(this, 'all', function (eventName) {
                console.info('Buttons Collection', eventName);
            });
        },
        setUrl: function () {
            var uid = AuthModule.getUserData().uid,
                ref = AuthModule.rootRef;
            this.url = ref.child('buttons').child(uid);
        }
    });

    return ButtonsCollection;

});