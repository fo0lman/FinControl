/**
 * Created by foolman on 30.07.2015.
 */
define([
    'backbone',
    'handlebars',

    'templates/templates'

], function (Backbone, Handlebars, JST) {
    "use strict";

    var ModelView;
    ModelView = Backbone.View.extend({
        className: '',
        template: Handlebars.compile(JST),
        events: {
            '': ''
        },

        render: function () {

        }
    });
    return ModelView;
});