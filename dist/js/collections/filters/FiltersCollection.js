define([
    'backbone',
    'backbonefire',
    'modules/authorization',
    'models/filters/FilterModel'

], function (Backbone, bbfire, AuthModule, FilterModel) {
    "use strict";

    var FiltersCollection;

    FiltersCollection = Backbone.Firebase.Collection.extend({
        model: FilterModel,
        initialize: function () {
            this.setUrl();
            this.listenTo(this, 'all', function (eventName) {
                console.info('Filters Collection', eventName);
            });
        },
        setUrl: function () {
            var uid = AuthModule.getUserData().uid,
                ref = AuthModule.rootRef;
            this.url = ref.child('buttons').child(uid);
        }
    });

    return FiltersCollection;

});