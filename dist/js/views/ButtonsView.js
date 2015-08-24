define([
    'backbone',
    'handlebars',
    'templates',

    'views/AddButtonView',
    'views/ButtonView'
], function (Backbone, Handlebars, JST, AddButtonView, ButtonView) {
    "use strict";

    var ButtonsView;
    ButtonsView = Backbone.View.extend({
        className: 'row',
        initialize: function () {
            this.listenTo(this.collection, 'sync update', this.render);
        },
        renderAddButton: function () {
            var addButtonView = new AddButtonView();
            this.$('#add-button-container').append(addButtonView.render().$el);
        },
        renderButton: function (button) {
            var buttonView = new ButtonView({
                model: button
            });
            this.$('#buttons-container').append(buttonView.render().$el);
        },
        render: function() {
            this.template = Handlebars.compile(JST.Buttons());
            this.$el.html(this.template());
            this.renderAddButton();
            this.collection.each(this.renderButton, this);
            return this;
        }
    });

    return ButtonsView;
});