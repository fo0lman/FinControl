define([
    'collections/ItemsCollection'
], function (ItemsCollection) {
    "use strict";

    var collection;

    function getCollection () {
        if (!collection) {
            collection = new ItemsCollection();
        }
        return collection;
    }

    function clearCollection() {
        collection = null;
    }

    return {
        getItemsCollection: getCollection,
        clearItemsCollection: clearCollection
    };
});