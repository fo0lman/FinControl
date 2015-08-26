define([
    'pages/AbstractPage',
    'views/pages/StatisticsPage',
    'views/StatisticsView',
    'collections/items/ItemsControl'

], function (AbstractPage, StatisticsPageView, StatisticsView, ItemsControl) {
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

            var itemCollection = ItemsControl.getItemsCollection();
            var itemsView = new StatisticsView({
                collection: itemCollection
            });
            this.components.push(itemsView);
        }
    });
    return StatisticsPage;
});