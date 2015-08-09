define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates'
], function (AbstractPage, Handlebars, JST) {
    "use strict";

    var HomePageView;
    HomePageView = AbstractPage.extend({
        title: 'Home Page',
        template: Handlebars.compile(JST.HomePage)

    });

    return HomePageView;
});