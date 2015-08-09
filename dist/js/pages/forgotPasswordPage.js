define([
    'pages/AbstractPage',
    'views/pages/ForgotPasswordPage'
], function (AbstractPage, PasswordPageView) {
    "use strict";

    var ForgotPasswordPage;
    ForgotPasswordPage = AbstractPage.extend({
        title: 'Forgot Password Page',
        initialize: function (options) {
            AbstractPage.prototype.initialize.call(this, arguments);
            var forgotPasswordPage = new PasswordPageView({
                title: this.title
            });
            this.components.push(forgotPasswordPage);
        }
    });

    return ForgotPasswordPage;
});
