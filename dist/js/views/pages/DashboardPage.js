define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates'
], function (AbstractPage, Handlebars, JST) {
    "use strict";

    var DashboardPageView;
    DashboardPageView = AbstractPage.extend({
        className: 'row',
        title: 'Dashboard',
        initialize: function() {
            this.template = Handlebars.compile(JST.DashboardPage({title: this.title}));
        }
    });

    return DashboardPageView;
});