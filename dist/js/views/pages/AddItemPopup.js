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
            'click .js-add-item': 'addItem',
            'submit .add-item-form': 'addItem'
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
            this.trigger('addform:submitted', {
                date: parseInt(this.$('#inputDate').val(), 10),
                sum: this.$('#inputSum').val(),
                category: this.$('#inputCategory').val(),
                source: this.$('#inputSource').val()
            });
            this.close();
        },
        close: function() {
            this.remove();
        }
    });

    return AddItemPopupView;
});