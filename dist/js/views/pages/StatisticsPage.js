define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates'
], function (AbstractPage, Handlebars, JST) {
    "use strict";

    var StatisticsPageView;
    StatisticsPageView = AbstractPage.extend({
        title: 'Statistics Page',
        initialize: function() {
            this.template = Handlebars.compile(JST.StatisticsPage({title: this.title}))
        }
    });

    return StatisticsPageView;
});