define([
    'views/modules/spinner'
], function (SpinnerView) {
    "use strict";

    var Spinner;
    Spinner = function(options) {
        new SpinnerView(options);
    };
    return Spinner;
});