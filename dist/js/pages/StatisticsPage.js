define([
    'pages/AbstractPage',
    'views/pages/StatisticsPage'
], function (AbstractPage, StatisticsPageView) {
    "use strict";

    var StatisticsPage;
    StatisticsPage = AbstractPage.extend({
        title: 'Statistics',
        initialize: function (options) {
            AbstractPage.prototype.initialize.call(this, arguments);
            var statisticsPageView = new StatisticsPageView({
                title: this.title
            });
            this.components.push(statisticsPageView);
        }
    });
    return StatisticsPage;
});