define([
    'backbone',
    'handlebars',
    'templates',
    'models/categories/CategoryModel',
    'collections/categories/CategoriesControl'
], function(Backbone, Handlebars, JST, Category, Categories) {
    "use strict";

    var AddCategoryPopupView;
    AddCategoryPopupView = Backbone.View.extend({
        events: {
            'click #btnCreate': 'addCategory'
        },

        initialize: function() {
            this.template = Handlebars.compile(JST.AddCategoryPopup());
            
            this.collection = Categories.getCategoriesCollection();

            $('body').append(this.render().el);

            $('#modalCategory').modal();

            $('#modalCategory').on('hidden.bs.modal', this.close);
            $('#modalCategory').on('shown.bs.modal', function () {
                $('#inputName').focus();
            });
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        },
        addCategory: function( e ) {

            var newCategoryName = $('.modal-body').find('#inputName').val();

            var category = new Category( {title: newCategoryName} );
            this.collection.create({
                title: newCategoryName
            });

            $('#modalCategory').modal('hide');
        },
        close: function() {

            this.parentElement.remove();
        }
    });

    return AddCategoryPopupView;
});
