define([
    'backbone',
    'handlebars',
    'templates',

    'views/StatisticView'
], function (Backbone, Handlebars, JST, StatisticView) {
    "use strict";

    var StatisticsView;
    StatisticsView = Backbone.View.extend({
        className: "row",
        initialize: function () {
            this.listenTo(this.collection, 'add', this.renderStatistic);
            this.listenTo(this.collection, 'sync update', this.render);
        },
        renderStatistic: function (statistic) {
            var statisticView = new StatisticView({
                model: statistic
            });
            this.$('#filters-container').append(statisticView.render().$el);
        },
        render: function() {
            this.template = Handlebars.compile(JST.Statistics());
            this.$el.html(this.template());
            var lastTenModelsArr = this.collection.last(10);
            lastTenModelsArr.forEach(this.renderStatistic, this);
            return this;
        }
    });

    return StatisticsView;
});