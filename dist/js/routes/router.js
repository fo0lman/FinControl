define([
    'backbone',
    'pages/HomePage',
    'pages/NotFoundPage',
    'pages/LoginPage',
    'pages/RegistrationPage',
    'pages/ForgotPasswordPage',
    'pages/DashboardPage',

    'modules/authorization'
], function (Backbone, HomePage, NotFoundPage, LoginPage, RegistrationPage, ForgotPasswordPage, DashboardPage, UserModule) {
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
            'signout(/)': 'signOutUser',
            '*anything(/)': 'notFoundPage'
        },
        mainpage: function () {
            if (UserModule.getUserAuthStatus()) {
                this.createPage('DashboardPage');
            } else {
                this.navigate('home', {
                    trigger: true,
                    replace: true
                });
            }
        },
        homePage: function () {
            if (UserModule.getUserAuthStatus()) {
                this.createPage('DashboardPage');
            } else {
                this.createPage('HomePage');
            }
        },
        loginPage: function () {
            if (UserModule.getUserAuthStatus()) {
                this.createPage('DashboardPage');
            } else {
                this.createPage('LoginPage');
            }
        },
        registartionPage: function () {
            if (UserModule.getUserAuthStatus()) {
                this.createPage('DashboardPage');
            } else {
                this.createPage('RegistrationPage');
            }
        },
        forgotPasswordPage: function () {
            if (UserModule.getUserAuthStatus()) {
                this.createPage('DashboardPage');
            } else {
                this.createPage('ForgotPasswordPage');
            }
        },
        dashboardPage: function () {
            if (UserModule.getUserAuthStatus()) {
                this.createPage('DashboardPage');
            } else {
                this.createPage('LoginPage');
            }
        },
        signOutUser: function () {
            if (UserModule.getUserAuthStatus()) {
                UserModule.logoutUser();
                this.createPage('HomePage');
            } else {
                this.createPage('HomePage');
            }
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