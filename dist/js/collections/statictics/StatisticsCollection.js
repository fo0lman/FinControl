define([
    'backbone',
    'backbonefire',
    'modules/authorization',
    'models/statistics/StatisticModel',
    'models/balance/BalanceControl'
], function (Backbone, bbfire, AuthModule, StatisticModel, balance) {
    "use strict";

    var StatisticsCollection;

    StatisticsCollection = Backbone.Firebase.Collection.extend({
        model: StatisticModel,

        comparator: function (m) {
            return -m.get('date');
        },
        initialize: function () {
            this.setUrl();
            this.listenTo(this, 'all', function (eventName) {
                console.info('Statistics collection', eventName)
            });

            /* after each collection update, recalculate total balance */
            this.listenTo(this, 'update', this.setBalance);
        },

        /*
         * set data for Balance model
         * get each record of item and sum it
         * after set property of count in balance model
         */
        setBalance: function () {
            var sum = 0;

            this.each(function (model) {
                sum += parseInt(model.get('sum'), 10);
            })

            balance.getBalance().set('count', sum);
        },

        setUrl: function () {
            var uid = AuthModule.getUserData().uid,
                ref = AuthModule.rootRef;
            this.url = ref.child('items').child(uid);
        }
      });

    return StatisticsCollection;
});