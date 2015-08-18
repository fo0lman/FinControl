define([
    'pages/AbstractPage',
    'views/pages/DashboardPage',
    'views/BalanceView',
    'views/ItemsView',
    'collections/ItemsCollection'
], function (AbstractPage, DashboardPageView, BalanceView, ItemsView, ItemsCollection) {
    "use strict";

    var DashboardPage;
    DashboardPage = AbstractPage.extend({
        title: 'Dashboard',
        initialize: function (options) {
            AbstractPage.prototype.initialize.call(this, arguments);
            var dashboardPageView = new DashboardPageView({
                title: this.title
            });
            this.components.push(dashboardPageView);

            var balanceView = new BalanceView();
            this.components.push(balanceView);

            var itemsView = new ItemsView({
                collection: new ItemsCollection()
            });
            this.components.push(itemsView);

        }
    });
    return DashboardPage;
});