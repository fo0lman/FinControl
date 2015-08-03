/**
 * Created by foolman on 30.07.2015.
 */
define([
    'backbone'
], function (Backbone) {
    "use strict";

    var Model;

    Model = Backbone.Model.extend({
        toJSON: function () {
            var obj = Backbone.Model.prototype.toJSON.apply(this);
            obj.cid = this.cid;
            return obj;
        },
        defaults: {

        }
    });
    return Model;
});