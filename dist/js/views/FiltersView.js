define([
    'backbone',
    'handlebars',
    'templates',

    'views/FilterView'
], function (Backbone, Handlebars, JST, FilterView) {
    "use strict";

    var FiltersView;
    FiltersView = Backbone.View.extend({
        className: 'row',
        initialize: function () {
            this.listenTo(this.collection, 'sync update', this.render);
        },
       
        renderFilter: function (filter) {
            var filterView = new FilterView({
                model: filter
            });
            this.$('.statisticType').append(filterView.render().$el);
        },
        render: function() {
            this.template = Handlebars.compile(JST.Filter());
            this.$el.html(this.template());
            this.collection.each(this.renderFilter, this);
            return this;
        }
    });

    return FiltersView;
});