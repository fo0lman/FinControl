define([
    'pages/AbstractPage',

    'views/pages/StatisticsPage',
    'views/BalanceView',
    'views/StatisticsView',
    'views/FiltersView',

    'collections/statictics/StatisticsControl',
    'collections/filters/FiltersControl'

], function (AbstractPage, StatisticsPageView, BalanceView, StatisticsView, FiltersView, StatisticsControl, FiltersControl) {
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

            var balanceView = new BalanceView();
            this.components.push(balanceView);


            var filterCollection = new FiltersControl.getFiltersCollection();
            var filtersView = new FiltersView({
                collection: filterCollection
            });
            this.components.push(filtersView);
            

            var statisticCollection = StatisticsControl.getStatisticsCollection();
            var statisticsView = new StatisticsView({
                collection: statisticCollection
            });
            this.components.push(statisticsView);

        }
    });
    return StatisticsPage;
});