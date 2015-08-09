define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates'
], function (AbstractPage, Handlebars, JST) {
    "use strict";

    var RegistrationPageView;
    RegistrationPageView = AbstractPage.extend({
        title: 'Registration',
        initialize: function() {
            this.template = Handlebars.compile(JST.RegistrationPage({title: this.title}));
        }
    });

    return RegistrationPageView;
});
