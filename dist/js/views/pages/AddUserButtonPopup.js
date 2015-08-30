define([
    'backbone',
    'handlebars',
    'templates'
], function (Backbone, Handlebars, JST) {
    "use strict";

    var AddCategoryPopupView;
    AddCategoryPopupView = Backbone.View.extend({
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
            this.template = Handlebars.compile(JST.AddUserButtonPopup());
            $('body').append(this.render().el);
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        },
        addItem: function (event) {
            event.preventDefault();
            this.trigger('addform:submitted', {
                name: this.$('#inputName').val(),
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

    return AddCategoryPopupView;
});