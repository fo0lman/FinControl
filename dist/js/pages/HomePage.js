define([
    'pages/AbstractPage',
    'views/pages/HomePage'
], function (AbstractPage, HomePageView) {
    "use strict";

    var HomePage;
    HomePage = AbstractPage.extend({
        title: 'Home Page',
        initialize: function (options) {
            AbstractPage.prototype.initialize.call(this, arguments);
            var homePageView = new HomePageView({
                title: this.title
            });
            this.components.push(homePageView);
        }
    });

    return HomePage;
});