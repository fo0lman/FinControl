/**
 * Created by foolman on 30.07.2015.
 */
"use strict";

requirejs.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery',
        underscore: '../../node_modules/underscore/underscore',
        backbone: '../../node_modules/backbone/backbone',
        firebase: '../../node_modules/firebase/lib/firebase-node',
        backbonefire: '../../bower_components/backbonefire/dist/backbonefire',
        handlebars: '../../node_modules/handlebars/dist/handlebars.amd',
        material: '../../node_modules/material-design-lite/material'
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
    'routes/router',
    'material'
], function (Router, Material) {
    new Router();
});