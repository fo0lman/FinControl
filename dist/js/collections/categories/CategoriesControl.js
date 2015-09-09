define([
    'collections/categories/CategoriesCollection'
], function (CategoriesCollection) {
    "use strict";

    var categories;

    function getCollection () {
        if (!categories) {
            categories = new CategoriesCollection();
        }
        return categories;
    }

    function clearCollection() {
        categories = null;
    }

    return {
        getCategoriesCollection: getCollection,
        clearCategoriesCollection: clearCollection
    };
});