define([
    'pages/AbstractPage',
    'views/ButtonsSettingsView',
    'collections/buttons/ButtonsControl',
    'views/AddButtonButtonSettingsView'
], function (AbstractPage, ButtonsSettingsView, ButtonsControl, AddButtonButtonSettingsView) {
    "use strict";

    var SettingsPage;
    SettingsPage = AbstractPage.extend({
        title: 'Settings',
        initialize: function (options) {
            AbstractPage.prototype.initialize.call(this, arguments);

            // add button
            var addButtonButtonSettingsView = new AddButtonButtonSettingsView();
            this.components.push(addButtonButtonSettingsView);

            // table
            var buttonsCollection = ButtonsControl.getButtonsCollection();
            var settingsPageView = new ButtonsSettingsView({
                collection: buttonsCollection
            });
            this.components.push(settingsPageView);
        }
    });
    return SettingsPage;
});