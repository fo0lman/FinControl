define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates'
], function (AbstractPage, Handlebars, JST) {
    "use strict";

    var NotFoundPageView;
    NotFoundPageView = AbstractPage.extend({
        title: 'Oops, Page not found!',
        initialize: function() {
            this.template = Handlebars.compile(JST.NotFoundPage({title: this.title}))
        }
    });

    return NotFoundPageView;
});