define([
    'backbone',
    'handlebars',
    'templates',

    'views/StatisticsItemView',
    'modules/spinnerControl'
], function (Backbone, Handlebars, JST, StatisticsItemView, spinner) {
    "use strict";

    var StatisticsView;
    StatisticsView = Backbone.View.extend({
        className: "row",
        initialize: function () {
            this.spinnerStart();
            this.listenTo(this.collection, 'add', this.renderItem);
            this.listenTo(this.collection, 'sync update', this.render);
            this.listenTo(this.collection, 'sync', this.spinnerStop);

            this.listenTo(this.collection, "sort", this.render);
        },
        renderItem: function (item) {
            var itemView = new StatisticsItemView({
                model: item
            });
            this.$('.items-container').append(itemView.render().$el);
        },
        render: function() {
            this.template = Handlebars.compile(JST.Items());
            this.$el.html(this.template());
            this.delegateEvents({
                'click thead tr': 'sortByDate',
                'click thead tr': 'sortBySum',
                'click thead tr': 'sortByCategory',
                'click thead tr': 'sortBySource'
            });
            this.collection.each(this.renderItem, this);
            return this;
        },
        spinnerStart: function () {
            spinner.show(true);
        },
        spinnerStop: function () {
            spinner.show(false);
        },
        sortByDate: function(){
            this.collection.byDate();
        },
        sortBySum: function(){
            this.collection.bySum();
        },
        sortByCategory: function(){
            this.collection.byCategory();
        },
        sortBySource: function(){
            this.collection.bySource();
        }
    });

    return StatisticsView;
});