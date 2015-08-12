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
            'click .social-login .fa-google-plus': 'loginUserGoogle',
            'click .social-login .fa-twitter': 'loginUserTwitter',
            'click .social-login .fa-facebook': 'loginUserFacebook',
            'click .social-login .fa-github': 'loginUserGithub',
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
        },
        loginUserGoogle: function( event ) {
            event.preventDefault();
            UserModule.authUserSocial('google');
        },
        loginUserTwitter: function( event ) {
            event.preventDefault();
            UserModule.authUserSocial('twitter');
        },
        loginUserFacebook: function( event ) {
            event.preventDefault();
            UserModule.authUserSocial('facebook');
        },
        loginUserGithub: function( event ) {
            event.preventDefault();     
            UserModule.authUserSocial('github');
        }
    });

    return LoginPageView;
});