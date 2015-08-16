define([
    'backbone'
], function (Backbone) {
    "use strict";

    var Item = Backbone.Model.extend({

        initialize: function() {
            console.log('Welcome to page main');
        },

        defaults: {
            date: (new Date()).getTime(),
            sum: 0,
            category: 'Other',
            source: 'Cash'
        }
    });

    var item = new Item();
    
    return Item;
});

