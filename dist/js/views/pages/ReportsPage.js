define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates'
], function (AbstractPage, Handlebars, JST) {
    "use strict";

    var ReportsPageView;
    ReportsPageView = AbstractPage.extend({
        title: 'Reports Page',
        initialize: function() {
            this.template = Handlebars.compile(JST.ReportsPage({title: this.title}))
        }
    });

    return ReportsPageView;
});