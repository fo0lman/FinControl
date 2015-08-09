define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates'
], function (AbstractPage, Handlebars, JST) {
    "use strict";

    var HomePageView;
    HomePageView = AbstractPage.extend({
        title: 'Wellcome to Home Page',
        initialize: function() {
            this.template = Handlebars.compile(JST.HomePage({title: this.title}));
        }
    });

    return HomePageView;
});