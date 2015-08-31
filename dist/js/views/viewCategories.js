define([
    'backbone',
    'handlebars',
    'templates',

    'views/CategoryView'
], function (Backbone, Handlebars, JST, CategoryView) {
    "use strict";

    var CategoriesView;
    CategoriesView = Backbone.View.extend({
        tagName: "tbody",
        initialize: function () {
            this.listenTo(this.collection, 'add', this.renderItem);
            this.listenTo(this.collection, 'sync update', this.render);
            this.listenTo(this.collection, 'update', this.checkListSize);
        },
        renderItem: function (item) {
            var categoryView = new CategoryView({
                model: CategoryModel
            });
            this.$('tbody').append(CategoryView.render().$el);
        },
        render: function() {
            this.template = Handlebars.compile(JST.Categories());
            this.$el.html(this.template());
            var lastTenModelsArr = this.collection.last(10);
            lastTenModelsArr.forEach(this.renderItem, this);
            return this;
        },
        checkListSize: function () {
            if (this.collection.length > 10) {
                this.render();
            }
        }
    });

    return CategoriesView;
});