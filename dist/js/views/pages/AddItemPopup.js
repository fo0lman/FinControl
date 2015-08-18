define([
    'backbone',
    'handlebars',
    'templates',

    'collections/ItemsCollection'
], function (Backbone, Handlebars, JST, ItemsCollection) {
    "use strict";

    var AddItemPopupView;
    AddItemPopupView = Backbone.View.extend({
        className: 'modal isShowPopup',
        attributes: {
            id: 'modalPopup'
        },
        events: {
            'click .js-close': 'close',
            'click .js-add-item': 'addItem'
        },

        initialize: function() {
            this.template = Handlebars.compile(JST.AddItemPopup());
            $('body').append(this.render().el);
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        },
        addItem: function (event) {
            event.preventDefault();
            var item = new ItemsCollection();
            item.create({
                "date": 1453337200000,
                "sum": "+111112",
                "category": "test",
                "source": "test_money"
            });
            this.close();
        },
        close: function() {
            this.remove();
        }
    });

    return AddItemPopupView;
});