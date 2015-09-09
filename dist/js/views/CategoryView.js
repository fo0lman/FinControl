define([
    'backbone',
    'handlebars',
    'templates'
], function (Backbone, Handlebars, JST) {
    "use strict";

    var CategoryView;
    CategoryView = Backbone.View.extend({
        tagName: 'tr',
        events: {
            'click .fa-trash-o': 'deleteCategory'
        },
        initialize: function () {
            this.listenTo(this.model, 'remove', this.remove);
        },
        render: function() {
            this.template = Handlebars.compile(JST.Category(this.model.toJSON()));
            this.$el.append(this.template());
            return this;
        },
        deleteCategory: function (event) {
            event.preventDefault();
            this.model.destroy();
            this.remove();
        }
    });

    return CategoryView;
});