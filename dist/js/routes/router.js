define([
    'backbone',
    'modules/pages',
    'modules/redirect'
], function (
    Backbone,
    Page,
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
                Page.create('HomePage');
            });
        },
        loginPage: function () {
            this.trigger('changeUrl', 'login', function () {
                Page.create('LoginPage');
            });
        },
        registartionPage: function () {
            this.trigger('changeUrl', 'registration', function () {
                Page.create('RegistrationPage');
            });
        },
        forgotPasswordPage: function () {
            this.trigger('changeUrl', 'forgotpassword', function () {
                Page.create('ForgotPasswordPage');
            });
        },
        dashboardPage: function () {
            this.trigger('changeUrl', 'dashboard', function () {
                Page.create('DashboardPage');
            });
        },
        statisticsPage: function () {
            this.trigger('changeUrl', 'statistics', function () {
                Page.create('StatisticsPage');
            });
        },
        reportsPage: function () {
            this.trigger('changeUrl', 'reports', function () {
                Page.create('ReportsPage');
            });
        },
        settingsPage: function () {
            this.trigger('changeUrl', 'settings', function () {
                Page.create('SettingsPage');
            });
        },
        signOutUser: function () {
            this.trigger('changeUrl', 'signout', function () {
                Page.create('HomePage');
            });
        },

        aboutPage: function () {
            this.trigger('changeUrl', 'about', function () {
                Page.create('AboutPage');
            });
        },
        helpPage: function () {
            this.trigger('changeUrl', 'help', function () {
                Page.create('HelpPage');
            });
        },
        notFoundPage: function () {
            Page.create('NotFoundPage');
        }
    });

    window.router = new Router();
})