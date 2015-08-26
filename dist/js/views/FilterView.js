define([
    'backbone',
    'handlebars',
    'templates',

    'collections/statictics/StatisticsControl'
], function (Backbone, Handlebars, JST, StatisticsControl) {
    "use strict";

    var FilterView;
    FilterView = Backbone.View.extend({
        tagName: 'button',
        className: 'btn btn-primary',
        attributes: {
            type: 'button'
        },
        events: {
            'click span': 'getFilter'
        },
        render: function() {
            this.template = Handlebars.compile(JST.Filter(this.model.toJSON()));
            this.$el.append(this.template());
            return this;
        },
        getFilter: function (event) {
            event.preventDefault();
            var statisticCollection = new StatisticsControl.getStatisticsCollection();
            statisticCollection.create({
                name: this.model.attributes.name,
                category: this.model.attributes.category,
                date: (new Date()).getTime(),
                source: this.model.attributes.source,
                sum: this.model.attributes.sum
            });
        }
    });

    return FilterView;
});