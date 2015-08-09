define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates'
], function (AbstractPage, Handlebars, JST) {
    "use strict";

    var LoginPageView;
    LoginPageView = AbstractPage.extend({
        title: 'Loggining',
        initialize: function() {
            this.template = Handlebars.compile(JST.LoginPage({title: this.title}))
        }
    });

    return LoginPageView;
});