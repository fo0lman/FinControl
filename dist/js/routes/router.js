define([
    'backbone',

    'pages/HomePage',
    'pages/NotFoundPage',
    'pages/LoginPage',
    'pages/RegistrationPage',
    'pages/ForgotPasswordPage',
    'pages/DashboardPage',

    'pages/StatisticsPage',
    'pages/ReportsPage',
    'pages/SettingsPage',
    'pages/AboutPage',
    'pages/HelpPage',

    'modules/redirect'
], function (
    Backbone,

    HomePage,
    NotFoundPage,
    LoginPage,
    RegistrationPage,
    ForgotPasswordPage,
    DashboardPage,
    StatisticsPage,
    ReportsPage,
    SettingsPage,
    AboutPage,
    HelpPage,

    RedirectModule
) {
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
            'statistics(/)': 'statisticsPage',
            'reports(/)': 'reportsPage',
            'settings(/)': 'settingsPage',
            'signout(/)': 'signOutUser',

            'about(/)': 'aboutPage',
            'help(/)': 'helpPage',

            '*anything(/)': 'notFoundPage'
        },
        initialize: function () {
          this.listenTo(this, 'changeUrl', RedirectModule)
        },
        mainpage: function () {
            this.trigger('changeUrl', 'main', function () {
                this.navigate('home', {
                    trigger: true,
                    replace: true
                });
            });
        },
        homePage: function () {
            this.trigger('changeUrl', 'home', function () {
                this.createPage('HomePage');
            });
        },
        loginPage: function () {
            this.trigger('changeUrl', 'login', function () {
                this.createPage('LoginPage');
            });
        },
        registartionPage: function () {
            this.trigger('changeUrl', 'registration', function () {
                this.createPage('RegistrationPage');
            });
        },
        forgotPasswordPage: function () {
            this.trigger('changeUrl', 'forgotpassword', function () {
                this.createPage('ForgotPasswordPage');
            });
        },
        dashboardPage: function () {
            this.trigger('changeUrl', 'dashboard', function () {
                this.createPage('DashboardPage');
            });
        },
        statisticsPage: function () {
            this.trigger('changeUrl', 'statistics', function () {
                this.createPage('StatisticsPage');
            });
        },
        reportsPage: function () {
            this.trigger('changeUrl', 'reports', function () {
                this.createPage('ReportsPage');
            });
        },
        settingsPage: function () {
            this.trigger('changeUrl', 'settings', function () {
                this.createPage('SettingsPage');
            });
        },
        signOutUser: function () {
            this.trigger('changeUrl', 'signout', function () {
                this.createPage('HomePage');
            });
        },

        aboutPage: function () {
            this.trigger('changeUrl', 'about', function () {
                this.createPage('AboutPage');
            });
        },
        helpPage: function () {
            this.trigger('changeUrl', 'help', function () {
                this.createPage('HelpPage');
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
            if (type === 'StatisticsPage') {
                PageClass = StatisticsPage;
            }
            if (type === 'ReportsPage') {
                PageClass = ReportsPage;
            }
            if (type === 'SettingsPage') {
                PageClass = SettingsPage;
            }
            if (type === 'AboutPage') {
                PageClass = AboutPage;
            }
            if (type === 'HelpPage') {
                PageClass = HelpPage;
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