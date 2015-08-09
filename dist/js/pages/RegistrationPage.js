define([
    'pages/AbstractPage',
    'views/pages/RegistrationPage'
], function (AbstractPage, RegistrationPageView) {
    "use strict";

    var RegistrationPage;
    RegistrationPage = AbstractPage.extend({
        title: 'Registration',
        initialize: function (options) {
            AbstractPage.prototype.initialize.call(this, arguments);
            var registrationPageView = new RegistrationPageView({
                title: this.title
            });
            this.components.push(registrationPageView);
        }
    });

    return RegistrationPage;
});
