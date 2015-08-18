define([
    'backbone',
    'backbonefire',
    'modules/authorization'
], function (Backbone, bbfire, AuthModule) {
    "use strict";

    var BalanceModel;
    BalanceModel = Backbone.Firebase.Model.extend({
        initialize: function () {
            this.setUrl();
            this.listenTo(this, 'all', function (eventName) {
                console.log('Balance Model', eventName)
            });
        },
        setUrl: function () {
            var uid = AuthModule.getUserData().uid,
                ref = AuthModule.rootRef;

            this.urlRoot = ref.child('balance').child(uid);
        },
        defaults: {
            count: 0
        }
    });

    return BalanceModel;
});