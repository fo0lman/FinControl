define([
    'backbone',
    'handlebars',
    'templates',

    'collections/ItemsControl',
    'views/pages/AddItemPopup'
], function (Backbone, Handlebars, JST, ItemsControl, AddItemPopup) {
    "use strict";

    var AddButtonView;
    AddButtonView = Backbone.View.extend({

        events: {
            'click .js-add-button': 'addItem'
        },
        render: function() {
            this.template = Handlebars.compile(JST.AddButton());
            this.$el.append(this.template());
            return this;
        },
        addItem: function (event) {
            event.preventDefault();

            var addIt = new AddItemPopup();
            addIt.on('addform:submitted', function (formData) {
                var itemCollection = new ItemsControl.getItemsCollection();
                itemCollection.create(formData);
            });
        }

    });

    return AddButtonView;
});