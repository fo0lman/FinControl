define([
    'backbone',
    'pages/HomePage',
    'pages/NotFoundPage',
    'pages/LoginPage',
    'pages/RegistrationPage',
    'pages/ForgotPasswordPage',
    'pages/DashboardPage',
    'pages/UserMenu',

    'modules/authorization'
], function (Backbone, HomePage, NotFoundPage, LoginPage, RegistrationPage, ForgotPasswordPage, DashboardPage, UserMenu, UserModule) {
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
            if ( UserModule.getUserAuthStatus() ) {
                this.createPage('DashboardPage');
            } else {
                this.mainpage();
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
            this.removeUserMenu();
            this.currentPage = (new PageClass(params)).render();
            this.currentUsrMenu = (new UserMenu()).render();
        },
        removeCurrentPage: function () {
            if (this.currentPage) {
                this.currentPage.trigger('removePage');
            }
        },
        removeUserMenu: function () {
            if (this.currentUsrMenu) {
                this.currentUsrMenu.remove();
            }
        }
    });

    window.router = new Router();
});