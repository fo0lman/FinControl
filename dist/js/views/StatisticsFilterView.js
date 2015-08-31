define([
    'backbone',
    'handlebars',
    'templates',
    'modules/datePicker'
], function (Backbone, Handlebars, JST, datepicker) {
    "use strict";

    var StatisticsFilterView;
    StatisticsFilterView = Backbone.View.extend({
        className: 'row',
        events: {
            'click .js-filter-button': 'filter',
            'mouseover .dateInput': 'createDatepicker'
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
        },
        createDatepicker: function ( e ) {
            $(e.currentTarget).datepicker();
        }
    });

    return StatisticsFilterView;
});