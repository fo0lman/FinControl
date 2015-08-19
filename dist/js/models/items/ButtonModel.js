define([
    'backbone'
], function (Backbone) {
    "use strict";

    var ButtonModel;
    ButtonModel = Backbone.Model.extend({
        initialize: function () {
            this.listenTo(this, 'all', function (eventName) {
                console.log('Button Model', eventName)
            });
        },

        validate: function( attrs ) {
            if (attrs.sum = 0) {
                return 'Summa > 0';
            }
        },

        defaults: {
            date: (new Date()).getTime(),
            sum: '0',
            category: 'Other',
            source: 'Cash'
        }
    });

    return ButtonModel;
});