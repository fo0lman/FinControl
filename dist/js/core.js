"use strict";

requirejs.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery',
        jqueryui: '../../node_modules/jquery-ui/jquery-ui',
        underscore: '../../node_modules/underscore/underscore',
        backbone: '../../node_modules/backbone/backbone',
        firebase: '../../bower_components/firebase/firebase',
        backbonefire: '../../bower_components/backbonefire/dist/backbonefire',
        handlebars: '../../node_modules/handlebars/dist/handlebars.amd',
        bootstrap: '../../node_modules/bootstrap/dist/js/bootstrap.min',
        templates: 'templates/jst',
        spinner: '../../node_modules/spin.js/spin',
        chartjs: '../../node_modules/chart.js/Chart.min',
        d3: '../../bower_components/d3/d3.min',
        c3: '../../bower_components/c3/c3.min'
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
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});

requirejs([
    'routes/router',
    'bootstrap'
], function (Router, bootstrap) {
    Backbone.history.start();
});