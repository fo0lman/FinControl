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
        defaults: {
            name: 'New Button',
            date: (new Date()).getTime(),
            sum: '0',
            category: 'Other',
            source: 'Cash'
        }
    });

    return ButtonModel;
});