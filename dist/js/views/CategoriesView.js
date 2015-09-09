define([
    'backbone',
    'handlebars',
    'templates',

    'views/CategoryView',
    'collections/categories/CategoriesControl'
], function (Backbone, Handlebars, JST, CategoryView, Categories) {
    "use strict";

    var CategoriesView;
    CategoriesView = Backbone.View.extend({
        el: '#category .items-container',

        initialize: function () {
            this.collection = Categories.getCategoriesCollection();
            // this.listenTo(this.collection, 'add', this.renderItem);
            this.listenTo(this.collection, 'sync update', this.render);
            this.render();
        },
        renderCategory: function (item) {
            var categoryView = new CategoryView({
                model: item
            });
            this.$el.append(categoryView.render().$el);
        },
        render: function() {
            this.$el.empty();
            this.collection.each(function (item) {
                this.renderCategory(item);
            }, this);
            return this;
        }
    });

    return CategoriesView;
});