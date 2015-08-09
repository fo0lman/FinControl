define([
    'pages/AbstractPage',
    'views/pages/ForgotPasswordPage'
], function (AbstractPage, PasswordPageView) {
    "use strict";

    var PasswordPage;
    var PasswordPage;
    PasswordPage = AbstractPage.extend({
        title: 'Forgot Password Page',
        initialize: function (options) {
            AbstractPage.prototype.initialize.call(this, arguments);
            var passwordPageView = new PasswordPageView({
                title: this.title
            });
            this.components.push(passwordPageView);
        }
    });

    return PasswordPage;
});
