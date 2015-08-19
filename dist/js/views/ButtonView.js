define([
    'backbone',
    'handlebars',
    'templates'
], function (Backbone, Handlebars, JST) {
    "use strict";

    var ButtonView;
    ButtonView = Backbone.View.extend({
        tagName: 'td',
        events: {
            'click .but-add': 'addStringTable'
        },

        initialize: function () {
            this.render();
        },

        render: function() {
            this.template = Handlebars.compile(JST.Item(this.model.toJSON()));
            this.$el.append(this.template());
            return this;
        },

        addStringTable: function (event) {
            event.preventDefault();
            //Добавляем строки в таблицу
        }

    });

    return ButtonView;
});