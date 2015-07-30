/**
 * Created by foolman on 30.07.2015.
 */
"use strict";

requirejs.config({
    paths: {
        jquery: '../node_modules/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        firebase: '../bower_components/firebase/firebase',
        backbonefire: '../bower_components/backbonefire/dist/backbonefire',
        handlebars: '../node_modules/handlebars/dist/handlebars.amd'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'backbonefire': {
            deps: ['backbone', 'firebase', 'underscore']
        }
    }
});

requirejs([
    'routers/router'
], function (Router) {
    new Router();
});