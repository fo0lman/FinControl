define([
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
    'pages/HelpPage'
], function (
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
    HelpPage
) {
    "use strict";

    var currentPage,
        Pages = {
            HomePage: HomePage,
            NotFoundPage: NotFoundPage,
            LoginPage: LoginPage,
            RegistrationPage: RegistrationPage,
            ForgotPasswordPage: ForgotPasswordPage,
            DashboardPage: DashboardPage,
            StatisticsPage: StatisticsPage,
            ReportsPage: ReportsPage,
            SettingsPage: SettingsPage,
            AboutPage: AboutPage,
            HelpPage: HelpPage
        };


    function createPage(type, params) {
        removeCurrentPage();
        currentPage = (new Pages[type](params)).render();
    }

    function removeCurrentPage() {
        if (currentPage) {
            currentPage.trigger('removePage');
        }
    }

    return {
        create: createPage
    }
});