define([
    'pages/AbstractPage'
], function (AbstractPage) {
    "use strict";

    var LoginPage;
    LoginPage = AbstractPage.extend({
        title: 'Login'
    });

    return LoginPage;
});