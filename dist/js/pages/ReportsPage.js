define([
    'pages/AbstractPage',
    'views/pages/ReportsPage',
    'views/ChartView'
], function (AbstractPage, ReportsPageView, ChartView) {
    "use strict";

    var ReportsPage;
    ReportsPage = AbstractPage.extend({
        title: 'Reports',
        initialize: function (options) {
            AbstractPage.prototype.initialize.call(this, arguments);
            var reportsPageView = new ReportsPageView({
                title: this.title
            });
            this.components.push(reportsPageView);

            var myChartView = new ChartView();
            this.components.push(myChartView);
        }
    });
    return ReportsPage;
});