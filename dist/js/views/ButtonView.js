define([
    'backbone',
    'handlebars',
    'templates',

    'collections/ItemsControl'
], function (Backbone, Handlebars, JST, ItemsControl) {
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
            var itemCollection = new ItemsControl.getItemsCollection();
            itemCollection.create({
                name: this.model.attributes.name,
                category: this.model.attributes.category,
                date: (new Date()).getTime(),
                source: this.model.attributes.source,
                sum: this.model.attributes.sum
            });
        }
    });

    return ButtonView;
});