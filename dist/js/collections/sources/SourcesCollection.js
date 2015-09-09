define([
    'backbone',
    'backbonefire',
    'modules/authorization',
    'models/sources/SourceModel'
], function (Backbone, bbfire, AuthModule, SourceModel) {
    "use strict";

    var SourcesCollection;

    SourcesCollection = Backbone.Firebase.Collection.extend({
        model: SourceModel,

        initialize: function () {
            this.setUrl();
            this.listenTo(this, 'all', function (eventName) {
                console.info('Sources Collection', eventName)
            });
        },
        setUrl: function () {
            var uid = AuthModule.getUserData().uid,
                ref = AuthModule.rootRef;
            this.url = ref.child('sources').child(uid);
        }
    });

    return SourcesCollection;
});