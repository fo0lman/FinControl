define([
    'pages/AbstractPage',
    'views/pages/DashboardPage'
], function (AbstractPage, DashboardPageView) {
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
        }
    });
    return DashboardPage;
});