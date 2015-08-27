define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates'
], function (AbstractPage, Handlebars, JST) {
    "use strict";

    var HelpPageView;
    HelpPageView = AbstractPage.extend({
        className: 'row',
        title: 'Help Page',
        initialize: function() {
            this.template = Handlebars.compile(JST.HelpPage({title: this.title}))
        }
    });

    return HelpPageView;
});