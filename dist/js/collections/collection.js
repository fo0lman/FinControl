/**
 * Created by foolman on 30.07.2015.
 */
define([
    'backbone',
    'backbonefire',
    'models/model'
], function (Backbone, Backbonefire, Model) {
    "use strict";

    var Models;

    Models = Backbone.Firebase.Collection.extend({
        model: Model,
        url: 'https://fincontrol.firebaseio.com'
    });
    return Models;
});
