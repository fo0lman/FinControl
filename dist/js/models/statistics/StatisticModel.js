define([
    'backbone'
], function (Backbone) {
    "use strict";

    var StatisticModel;
    StatisticModel = Backbone.Model.extend({
        initialize: function () {
            this.listenTo(this, 'all', function (eventName) {
                console.log('Statistic Model', eventName)
            });
        }
    });

    return StatisticModel;
});