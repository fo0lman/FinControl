define([
    'backbone',
    'handlebars',
    'templates',

    'collections/collectionCategory',
    'views/pages/AddUserButtonPopup'
], function (Backbone, Handlebars, JST, collectionCategory, AddUserButtomPopup) {
    "use strict";

    var AddUserButtonView;
    AddUserButtonView = Backbone.View.extend({

        events: {
            'click .js-add-button': 'addBut'
        },
        render: function() {
            this.template = Handlebars.compile(JST.AddButton());
            this.$el.append(this.template());
            return this;
        },
        addBut: function (event) {
            event.preventDefault();

            var addBut = new AddButPopup();
            addBut.on('addform:submitted', function (formData) {
                var buttonCollection = new buttonCollection.getButtonCollection();
                buttonCollection.create(formData);
            });
        }

    });

    return AddUserButtonView;
});