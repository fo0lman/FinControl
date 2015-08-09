define([
    'pages/AbstractPage',
    'views/pages/NotFoundPage'
], function (AbstractPage, NotFoundPageView) {
    "use strict";

    var NotFoundPage;
    NotFoundPage = AbstractPage.extend({
        title: 'Not Found!',
        initialize: function (options) {
            AbstractPage.prototype.initialize.call(this, arguments);
            var notFoundPageView = new NotFoundPageView({
                title: this.title
            });
            this.components.push(notFoundPageView);
        }
    });
    return NotFoundPage;
});