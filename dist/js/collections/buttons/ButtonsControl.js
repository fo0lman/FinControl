define([
    'collections/buttons/ButtonsCollection'
], function (ButtonsCollection) {
    "use strict";

    var buttons;

    function getCollection () {
        if (!buttons) {
            buttons = new ButtonsCollection();
        }
        return buttons;
    }

    function clearCollection() {
        buttons = null;
    }

    return {
        getButtonsCollection: getCollection,
        clearButtonsCollection: clearCollection
    };
});