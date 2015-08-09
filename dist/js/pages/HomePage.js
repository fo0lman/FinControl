define([
    'pages/AbstractPage'
], function (AbstractPage) {
    "use strict";

    var HomePage;
    HomePage = AbstractPage.extend({
        title: 'Home Page'
    });

    return HomePage;
});