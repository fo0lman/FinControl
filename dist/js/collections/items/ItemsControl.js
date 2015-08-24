define([
    'collections/items/ItemsCollection'
], function (ItemsCollection) {
    "use strict";

    var items;

    function getCollection () {
        if (!items) {
            items = new ItemsCollection();
        }
        return items;
    }

    function clearCollection() {
        items = null;
    }

    return {
        getItemsCollection: getCollection,
        clearItemsCollection: clearCollection
    };
});