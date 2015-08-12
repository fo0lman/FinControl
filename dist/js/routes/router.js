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

        accessUrls: {
            'true': [
                'dashboard',
                'signout'
            ],

            'false': [
                'mainpage',
                'homepage',
                'loginpage',
                'registrationpage',
                'forgotpasswordpage'
            ]
        },

        initialize: function () {
          this.listenTo(this, 'changeUrl', function (url, callback) {
            var isAuth = UserModule.getUserAuthStatus(),
                router = this,
                accessUrl = this.accessUrls[isAuth];

            for (var i = 0; i < accessUrl.length; i++) {
                if (accessUrl[i] === url) {
                    callback.call(router);
                    return;
                }
            };

            if (isAuth) {
                router.navigate('dashboard', true);
            } else {
                router.navigate('home', true);
            }
          })  
        },

        checkAccess: function (isAuth) {

        },

        mainpage: function () {
            this.trigger('changeUrl', 'mainpage', function () {
                this.navigate('home', {
                    trigger: true,
                    replace: true
                });
            });
        },
        homePage: function () {
            this.trigger('changeUrl', 'homepage', function () {
                this.createPage('HomePage');
            });
        },
        loginPage: function () {
            this.trigger('changeUrl', 'loginpage', function () {
                this.createPage('LoginPage');
            });
        },
        registartionPage: function () {
            this.trigger('changeUrl', 'registrationpage', function () {
                this.createPage('RegistrationPage');
            });
        },
        forgotPasswordPage: function () {
            this.trigger('changeUrl', 'forgotpasswordpage', function () {
                this.createPage('ForgotPasswordPage');
            });
        },
        dashboardPage: function () {
            this.trigger('changeUrl', 'dashboard', function () {
                this.createPage('LoginPage');
            });
        },
        signOutUser: function () {
            this.trigger('changeUrl', 'signout', function () {
                UserModule.logoutUser();
            });
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