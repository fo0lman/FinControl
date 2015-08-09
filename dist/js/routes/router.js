define([
    'backbone',
    'pages/HomePage',
    'pages/NotFoundPage',
    'pages/LoginPage',
    'pages/RegistrationPage',
    'pages/ForgotPasswordPage',
    'pages/DashboardPage'
], function (Backbone, HomePage, NotFoundPage, LoginPage, RegistrationPage, ForgotPasswordPage, DashboardPage) {
    "use strict";

    var Router;
    Router = Backbone.Router.extend({
        routes: {
            '':'mainpage',
            'home(/)': 'homePage',
            'login(/)': 'loginPage',
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
        loginPage: function () {
            this.createPage('LoginPage');
        },
        registartionPage: function () {
            this.createPage('RegistrationPage');
        },
        forgotPasswordPage: function () {
            this.createPage('ForgotPasswordPage');
        },
        dashboardPage: function () {
            this.createPage('DashboardPage');
        },
        notFoundPage: function () {
            this.createPage('NotFoundPage');
        },
        createPage: function (type, params) {
            var PageClass;

            if (type === 'HomePage') {
                PageClass = HomePage;
            }

            if (type === 'ForgotPasswordPage') {
                PageClass = ForgotPasswordPage;
            }

            if (type === 'LoginPage') {
                PageClass = LoginPage;
            }

            if (type === 'RegistrationPage') {
                PageClass = RegistrationPage;
            }

            if (type === 'DashboardPage') {
                PageClass = DashboardPage;
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