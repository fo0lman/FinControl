define([
    'views/modules/spinner'
], function (SpinnerView) {
    "use strict";

    var spin = false;
    function showSpinner (isStart) {
        if (isStart && !spin) {
            spin = new SpinnerView();
        }
        if (!isStart && spin) {
            spin.removeSpinner();
        }
        return spin;
    }
    function clearSpinner() {
        spin = false;
    }
    return {
        show: showSpinner,
        clear: clearSpinner
    }
});