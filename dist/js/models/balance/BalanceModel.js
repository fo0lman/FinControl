define([
    'backbone'
], function (Backbone) {
    "use strict";

    var BalanceModel;
    BalanceModel = Backbone.Model.extend({
        defaults: {
            count: 0
        }
    });

    return BalanceModel;
});