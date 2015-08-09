define([
    'pages/AbstractPage',
    'views/pages/LoginPage'
], function (AbstractPage, LoginPageView) {
    "use strict";

    var LoginPage;
    LoginPage = AbstractPage.extend({
        title: 'Log in',
        initialize: function (options) {
            AbstractPage.prototype.initialize.call(this, arguments);
            var loginPageView = new LoginPageView({
                title: this.title
            });
            this.components.push(loginPageView);
        }
    });
    return LoginPage;
});