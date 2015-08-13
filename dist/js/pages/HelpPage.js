define([
    'pages/AbstractPage',
    'views/pages/HelpPage'
], function (AbstractPage, HelpPageView) {
    "use strict";

    var HelpPage;
    HelpPage = AbstractPage.extend({
        title: 'Help',
        initialize: function (options) {
            AbstractPage.prototype.initialize.call(this, arguments);
            var helpPageView = new HelpPageView({
                title: this.title
            });
            this.components.push(helpPageView);
        }
    });
    return HelpPage;
});