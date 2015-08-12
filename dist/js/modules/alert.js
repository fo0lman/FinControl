define([
    'views/modules/alert'
], function (AlertView) {
    "use strict";

    var Alert;
    Alert = function(options) {
        var alertView = new AlertView(options); //alert, ok, warning-sign
    };

    return Alert;
});