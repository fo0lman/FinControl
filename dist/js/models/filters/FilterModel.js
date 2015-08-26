define([
    'backbone'
], function (Backbone) {
    "use strict";

    var FilterModel;
    FilterModel = Backbone.Model.extend({
        initialize: function () {
            this.listenTo(this, 'all', function (eventName) {
                console.log('Filter Model', eventName)
            });
        }
    });

    return FilterModel;
});