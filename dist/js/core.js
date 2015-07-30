/**
 * Created by foolman on 30.07.2015.
 */
"use strict";

requirejs.config({
    paths: {
        jquery: '../node_modules/jquery/dist/jquery',
        underscore: '../node_modules/underscore/underscore',
        backbone: '../node_modules/backbone/backbone',
        handlebars: '../node_modules/handlebars/dist/handlebars.amd',
        firebase: '../node_modules/firebase/lib/firebase-node',
        backbonefire: '../node_modules/backbonefire/dist/backbonefire'
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