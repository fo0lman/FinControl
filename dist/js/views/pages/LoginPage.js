define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates',
    'modules/authorization'
], function (AbstractPage, Handlebars, JST, UserModule) {
    "use strict";

    var LoginPageView;
    LoginPageView = AbstractPage.extend({
        title: 'Loggining',

        events: {
            'submit': 'login',
            'click .social-login li a': 'loginUserSocial'
        },

        initialize: function() {
            this.template = Handlebars.compile(JST.LoginPage({title: this.title}))
        },

        login: function( event ) {
            var email,
                password;

            email = this.$el.find('#inputEmail3').val();
            password = this.$el.find('#inputPassword3').val();

            event.preventDefault();
            
            UserModule.authUserEmail(email, password);

            if ( UserModule.getUserAuthStatus() ) {
                router.navigate('dashboard', {trigger: true});
            }
            
        },

        loginUserSocial: function( event ) {
            event.preventDefault();     
            UserModule.authUserSocial('github');
        }
    });

    return LoginPageView;
});