define([
    'backbone',
    'handlebars',
    'templates',

    'views/ButtonView',
    'collections/ItemsCollection'
], function (Backbone, Handlebars, JST, ButtonView, ItemsCollection) {
    "use strict";

    var ButtonsView;
    ButtonsView = Backbone.View.extend({
        tagName: 'table',
        id: "items-container",

        events: {
            'click .button.add': 'addButtonView'
        },

        addButtonView: function () {
            ItemsCollection.add(this.collection, 'add', this.renderButtons);
            ItemsCollection.on("add", function( ) {
              alert("«" + ship.get("name") + "» прямо по курсу!");
            });
        },

        initialize: function () {
            this.listenTo(this.collection, 'add', this.renderButtons);
        },

        renderButtons: function (button) {
            var buttonView = new ButtonView({
                model: button
            });
            this.$('#items-container').append(ButtonView.render().$el);
        },
        render: function() {
            this.template = Handlebars.compile(JST.Items());
            this.$el.html(this.template());
            this.collection.each(this.renderButtons, this);
            return this;
        }
    });

    return ItemsView;
});