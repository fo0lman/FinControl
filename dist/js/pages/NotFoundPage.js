define([
    'pages/AbstractPage'
], function (AbstractPage) {
    "use strict";

    var NotFoundPage;
    NotFoundPage = AbstractPage.extend({
        title: 'Not Found!'
    });
    return NotFoundPage;
});