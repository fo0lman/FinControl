define([
    'collections/sources/SourcesCollection'
], function (SourcesCollection) {
    "use strict";

    var sources;

    function getCollection () {
        if (!sources) {
            sources = new SourcesCollection();
        }
        return sources;
    }

    function clearCollection() {
        sources = null;
    }

    return {
        getSourcesCollection: getCollection,
        clearSourcesCollection: clearCollection
    };
});