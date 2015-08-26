define([
    'collections/statictics/StatisticsCollection'
], function (StatisticsCollection) {
    "use strict";

    var statistics;

    function getCollection () {
        if (!statistics) {
            statistics = new StatisticsCollection();
        }
        return statistics;
    }

    function clearCollection() {
        statistics = null;
    }

    return {
        getStatisticsCollection: getCollection,
        clearStatisticsCollection: clearCollection
    };
});