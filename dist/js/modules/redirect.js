define([
    'modules/authorization'
], function (UserModule) {
    "use strict";

    var Redirect,
        accessUrls = {
            'true': [
                'dashboard',
                'statistics',
                'reports',
                'settings',
                'signout',
                'about',
                'help'
            ],
            'false': [
                'main',
                'home',
                'login',
                'registration',
                'forgotpassword',
                'about',
                'help'
            ]
        };
    Redirect = function (url, callback) {
        var isAuth = UserModule.getUserAuthStatus(),
            accessUrl = accessUrls[isAuth];
        for (var i = 0; i < accessUrl.length; i++) {
            if (accessUrl[i] === url) {
                callback.call(router);
                return;
            }
        }
        if (isAuth) {
            router.navigate('dashboard', true);
        } else {
            router.navigate('home', true);
        }
    };
    return Redirect;
});





