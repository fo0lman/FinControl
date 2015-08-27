define([
    'backbone',
    'handlebars',
    'templates'
], function (Backbone, Handlebars, JST) {
    "use strict";

    var StatisticsFilterView;
    StatisticsFilterView = Backbone.View.extend({
        className: 'row',
        events: {
            'click .js-filter-button': 'filter'
        },
        initialize: function () {
            this.template = Handlebars.compile(JST.StatisticsFilter());
        },
        render: function () {
            this.$el.append(this.template());
            return this;
        },
        filter: function (event) {
            event.preventDefault();
            console.log('filtered!');
        }
    });

    return StatisticsFilterView;
});