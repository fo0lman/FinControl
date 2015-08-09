define([
    'pages/AbstractPage'
], function (AbstractPage) {
    "use strict";

    var PasswordPage;
    PasswordPage = AbstractPage.extend({
        title: 'Forgot your password?'
    });

    return PasswordPage;
});