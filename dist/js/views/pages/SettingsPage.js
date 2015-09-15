define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates',
    'views/pages/AddCategoryPopup',
    'views/pages/AddSourcePopup',
    'collections/categories/CategoriesControl', 
    'views/CategoriesView',
    'views/SourcesView'

], function (AbstractPage, Handlebars, JST, AddCategoryPopup, AddSourcePopup, Categories, CategoriesView, SourcesView) {
    "use strict";

    var SettingsPageView;
    SettingsPageView = AbstractPage.extend({
        className: 'row',
        title: 'Settings',
        events: {
            'click a[href="#category"]': 'createCategoriesView',
            'click a[href="#sources"]': 'createSourcesView',
            'click #category button': 'addCategory',
            'click #sources button': 'addSource'

        },
        initialize: function() {
            this.template = Handlebars.compile(JST.SettingsPage({title: this.title}));
            this.categories = Categories.getCategoriesCollection();
        },

        createCategoriesView: function () {
            var categoriesView = new CategoriesView();

        },

        createSourcesView: function () {
            var sourceView = new SourcesView();
        },

        addCategory: function () {
            new AddCategoryPopup();
        },

        addSource: function () {
            new AddSourcePopup();
        }
    });

    return SettingsPageView;
});