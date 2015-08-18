define([
    'backbone',
    'spinner'
], function (Backbone, spin) {
    "use strict";

    var SpinnerView;
    SpinnerView = Backbone.View.extend({
        className: "wait-spinner clearfix",
        initialize: function () {
            _.bindAll(this, "render");

            this.options = {
                lines: 13,
                length: 8,
                width: 3,
                radius: 10,
                corners: 1,
                rotate: 0,
                color: "#000",
                speed: 1,
                trail: 45,
                shadow: false,
                hwaccel: false,
                className: "spinner",
                zIndex: 2e9,
                top: "auto",
                left: "auto"
            };

        },
        render: function () {
            Spinner(this.options).spin(this.el);
            return this;
        },
        removeSpinner: function () {
          this.remove();
        }
    });

    return SpinnerView;
});