define([
    'models/balance/BalanceModel'
], function (BalanceModel) {
    "use strict";

    var balance;

    function getBalance () {
        if (!balance) {
            balance = new BalanceModel();
        }
        return balance;
    }

    function clearBalance() {
        balance = null;
    }

    return {
        getBalance: getBalance,
        clearBalance: clearBalance
    };
});