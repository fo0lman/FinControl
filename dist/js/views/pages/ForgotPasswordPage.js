define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates'
], function (AbstractPage, Handlebars, JST) {
    "use strict";

    var PasswordPageView;
    PasswordPageView = AbstractPage.extend({
        title: 'Reset Password',
        initialize: function() {
            this.template = Handlebars.compile(JST.ForgotPasswordPage({title: this.title}));
        }
    });

    return PasswordPageView;
});
