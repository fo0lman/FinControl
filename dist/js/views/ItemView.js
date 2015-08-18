define([
    'backbone',
    'handlebars',
    'templates'
], function (Backbone, Handlebars, JST) {
    "use strict";

    var ItemView;
    ItemView = Backbone.View.extend({
        tagName: 'tr',
        events: {
            'click .fa-trash-o': 'deleteItem'
        },
        initialize: function () {
            this.listenTo(this.model, 'sync', this.render);
            this.listenTo(this.model, 'remove', this.remove);
        },
        render: function() {
            this.template = Handlebars.compile(JST.Item(this.model.toJSON()));
            this.$el.append(this.template());
            return this;
        },
        deleteItem: function (event) {
            event.preventDefault();
            this.model.destroy();
        }
    });

    return ItemView;
});