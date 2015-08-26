define([
    'collections/filters/FiltersCollection'
], function (FiltersCollection) {
    "use strict";

    var filters;

    function getCollection () {
        if (!filters) {
            filters = new FiltersCollection();
        }
        return filters;
    }

    function clearCollection() {
        filters = null;
    }

    return {
        getFiltersCollection: getCollection,
        clearFiltersCollection: clearCollection
    };
});