define([
    'backbone'
], function (Backbone) {
    "use strict";

    var SourceModel;
    SourceModel = Backbone.Model.extend({
        initialize: function () {
            this.listenTo(this, 'all', function (eventName) {
                console.log('Source Model', eventName)
            });
        }
    });

    return SourceModel;
});