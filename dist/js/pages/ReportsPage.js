define([
    'pages/AbstractPage',
    'views/pages/ReportsPage'
], function (AbstractPage, ReportsPageView) {
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
        }
    });
    return ReportsPage;
});