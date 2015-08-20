define([
    'backbone',
    'handlebars',
    'templates',

    'collections/ItemsCollection'
], function (Backbone, Handlebars, JST, ItemsCollection) {
    "use strict";

    var ButtonView;
    ButtonView = Backbone.View.extend({
        tagName: 'button',
        className: 'btn btn-primary',
        attributes: {
            type: 'button'
        },
        events: {
            'click span': 'addItem'
        },
        render: function() {
            this.template = Handlebars.compile(JST.Button(this.model.toJSON()));
            this.$el.append(this.template());
            return this;
        },
        addItem: function (event) {
            event.preventDefault();
            var itemCollection = new ItemsCollection();
            itemCollection.create({
                name: this.model.attributes.name,
                category: this.model.attributes.category,
                date: this.model.attributes.date,
                source: this.model.attributes.source,
                sum: this.model.attributes.sum
            });
        }
    });

    return ButtonView;
});