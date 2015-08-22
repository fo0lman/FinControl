define([
    'backbone',
    'handlebars',
    'templates',
    'chartjs'
], function(Backbone, Handlebars, JST, ChartJS) {
    "use strict";

    var ChartView;
    ChartView = Backbone.View.extend({
        className: "row",
        initialize: function() {
        },
        render: function() {
            this.template = Handlebars.compile(JST.Chart());
            this.$el.html(this.template());

            return this;
        }
    });

    return ChartView;
});
