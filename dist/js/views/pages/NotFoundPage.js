define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates'
], function (AbstractPage, Handlebars, JST) {
    "use strict";

    var NotFoundPageView;
    NotFoundPageView = AbstractPage.extend({
        title: 'Not Found!',
        template: Handlebars.compile(JST.NotFoundPage())

    });

    return NotFoundPageView;
});