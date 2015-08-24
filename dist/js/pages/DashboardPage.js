define([
    'pages/AbstractPage',

    'views/pages/DashboardPage',
    'views/BalanceView',
    'views/ItemsView',
    'views/ButtonsView',

    'collections/items/ItemsControl',
    'collections/buttons/ButtonsControl'

], function (AbstractPage, DashboardPageView, BalanceView, ItemsView, ButtonsView, ItemsControl, ButtonsControl) {
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

            var buttonCollection = new ButtonsControl.getButtonsCollection();
            var buttonsView = new ButtonsView({
                collection: buttonCollection
            });
            this.components.push(buttonsView);

            var itemCollection = ItemsControl.getItemsCollection();
            var itemsView = new ItemsView({
                collection: itemCollection
            });
            this.components.push(itemsView);

            window.addFavoriteButton = function (buttonName) {
                buttonCollection.create({
                    "category" : "Rent",
                    "name" : buttonName,
                    "source" : "VISA",
                    "sum" : "-2000"
                })
            };
        }
    });
    return DashboardPage;
});