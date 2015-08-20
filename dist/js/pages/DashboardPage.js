define([
    'pages/AbstractPage',

    'views/pages/DashboardPage',
    'views/BalanceView',
    'views/ItemsView',
    'views/ButtonsView',

    'collections/ItemsCollection',
    'collections/ButtonsCollection'

], function (AbstractPage, DashboardPageView, BalanceView, ItemsView, ButtonsView, ItemsCollection, ButtonsCollection) {
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

            var buttonCollection = new ButtonsCollection();
            var buttonsView = new ButtonsView({
                collection: buttonCollection
            });
            this.components.push(buttonsView);

            var itemCollection = new ItemsCollection();
            var itemsView = new ItemsView({
                collection: itemCollection
            });
            this.components.push(itemsView);

            window.addFavoriteButton = function (buttonName) {
                buttonCollection.create({
                    "category" : "Rent",
                    "date" : (new Date()).getTime(),
                    "name" : buttonName,
                    "source" : "VISA",
                    "sum" : "-2000"
                })
            };
        }
    });
    return DashboardPage;
});