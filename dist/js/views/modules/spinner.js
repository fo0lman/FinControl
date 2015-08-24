define([
    'backbone',
    'spinner'
], function (Backbone, Spinner) {
    "use strict";

    var SpinnerView;
    SpinnerView = Backbone.View.extend({
        className: "wait-spinner clearfix",
        initialize: function () {

            this.options = {
                lines: 7,
                length: 12,
                width: 4,
                radius: 8,
                corners: 1,
                rotate: 0,
                color: "#337ab7",
                speed: 1,
                trail: 45,
                className: "spinner",
                zIndex: 2e9,
                top: '50%',
                left: '50%',
                shadow: false,
                hwaccel: false,
                position: 'absolute'
            };
            $('body').append(this.render().el);
        },
        render: function () {
            new Spinner(this.options).spin(this.el);
            return this;
        },
        removeSpinner: function () {
          this.remove();
        }
    });

    return SpinnerView;
});