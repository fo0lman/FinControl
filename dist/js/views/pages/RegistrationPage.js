define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates',
    'modules/authorization'
], function (AbstractPage, Handlebars, JST, UserModule) {
    "use strict";

    var RegistrationPageView;
    RegistrationPageView = AbstractPage.extend({
        title: 'Registration',

        events: {
            'submit':  'regUser'
        },

        initialize: function() {
            this.template = Handlebars.compile(JST.RegistrationPage({title: this.title}));
        },

        regUser: function( event ) {
            var email,
                password;

            email = this.$el.find('#inputEmail').val();
            password = this.$el.find('#inputPassword').val();
            event.preventDefault();
            UserModule.regUser(email, password);
            router.navigate('dashboard', {trigger: true});
        }
    });

    return RegistrationPageView;
});
