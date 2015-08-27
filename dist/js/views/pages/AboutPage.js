define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates'
], function (AbstractPage, Handlebars, JST) {
    "use strict";

    var AboutPageView;
    AboutPageView = AbstractPage.extend({
        className: 'row about-page-content',
        title: 'About Page',
        initialize: function() {
            this.template = Handlebars.compile(JST.AboutPage({title: this.title}))
        }
    });

    return AboutPageView;
});