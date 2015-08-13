define([
    'pages/AbstractPage',
    'views/pages/SettingsPage'
], function (AbstractPage, SettingsPageView) {
    "use strict";

    var SettingsPage;
    SettingsPage = AbstractPage.extend({
        title: 'Settings',
        initialize: function (options) {
            AbstractPage.prototype.initialize.call(this, arguments);
            var settingsPageView = new SettingsPageView({
                title: this.title
            });
            this.components.push(settingsPageView);
        }
    });
    return SettingsPage;
});