define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates'
], function (AbstractPage, Handlebars, JST) {
    "use strict";

    var SettingsPageView;
    SettingsPageView = AbstractPage.extend({
        className: 'row',
        title: 'Settings Page',
        initialize: function() {
            this.template = Handlebars.compile(JST.SettingsPage({title: this.title}))
        }
    });

    return SettingsPageView;
});