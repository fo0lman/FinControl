define([
    'pages/AbstractPage',
    'views/pages/AboutPage'
], function (AbstractPage, AboutPageView) {
    "use strict";

    var AboutPage;
    AboutPage = AbstractPage.extend({
        title: 'About us',
        initialize: function (options) {
            AbstractPage.prototype.initialize.call(this, arguments);
            var aboutPageView = new AboutPageView({
                title: this.title
            });
            this.components.push(aboutPageView);
        }
    });
    return AboutPage;
});