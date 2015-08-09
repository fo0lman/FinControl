define([
    'backbone',
    'pages/HomePage',
    'pages/NotFoundPage'
], function (Backbone, HomePage, NotFoundPage) {
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
            this.createPage('HomePage');
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
            this.createPage('NotFoundPage');
        },
        createPage: function (type, params) {
            var PageClass;

            if (type === 'HomePage') {
                PageClass = HomePage;
            }

            if (type === 'NotFoundPage') {
                PageClass = NotFoundPage;
            }
            this.removeCurrentPage();
            this.currentPage = (new PageClass(params)).render();
        },
        removeCurrentPage: function () {
            if (this.currentPage) {
                this.currentPage.trigger('removePage');
            }
        }
    });

    window.router = new Router();
});