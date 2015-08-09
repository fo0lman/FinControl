"use strict";

requirejs.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery',
        underscore: '../../node_modules/underscore/underscore',
        backbone: '../../node_modules/backbone/backbone',
        firebase: '../../bower_components/firebase/firebase',
        backbonefire: '../../bower_components/backbonefire/dist/backbonefire',
        handlebars: '../../node_modules/handlebars/dist/handlebars.amd',
        bootstrap: '../../node_modules/bootstrap/dist/js/bootstrap.min'
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
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

requirejs([
    'routes/router',
    'bootstrap'
], function (Router, bootstrap) {
    Backbone.history.start();
});