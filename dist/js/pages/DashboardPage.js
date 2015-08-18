define([
    'pages/AbstractPage',
    'views/pages/DashboardPage',
    'views/BalanceView'
], function (AbstractPage, DashboardPageView, BalanceView) {
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

        }
    });
    return DashboardPage;
});