define([
    'backbone',
    'modules/authorization'
], function (Backbone, UserModule) {
    "use strict";

    var Router;
    Router = Backbone.Router.extend({
        routes: {
            '':'mainpage',
            'home(/)': 'homePage',
            'login(/)': 'showLoginState',
            'registration(/)': 'registartionPage',
            'forgotpass(/)': 'forgotPasswordPage',
            'dashboard(/)': 'dashboardPage',

            '*anything(/)': 'notFoundPage'
        },
        mainpage: function () {
            this.navigate('home', {
                trigger: true,
                replace: true
            });
        },
        homePage: function () {
            console.log('homePage');
        },
        showLoginState: function () {
            console.log('showLoginState');
        },
        registartionPage: function () {
            console.log('registartionPage');
        },
        forgotPasswordPage: function () {
            console.log('forgotPasswordPage');
        },
        dashboardPage: function () {
            console.log('dashboardPage');
        },
        notFoundPage: function () {
            console.log('notFoundPage');
        }
    });

    window.router = new Router();
});