define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates',    
    'modules/authorization'
], function (AbstractPage, Handlebars, JST, UserModule) {
    "use strict";

    var PasswordPageView;
    PasswordPageView = AbstractPage.extend({
        title: 'Reset Password',

        events: {
            'submit': 'resetPassword'
        },

        initialize: function() {
            this.template = Handlebars.compile(JST.ForgotPasswordPage({title: this.title}));
        },

        resetPassword: function( event ) {
            var email;

            email = this.$el.find('#inputEmail').val();
            event.preventDefault();
            UserModule.resetUserPass(email);
        }
    });

    return PasswordPageView;
});
