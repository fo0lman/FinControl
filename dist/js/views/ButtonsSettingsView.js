define([
    'backbone',
    'handlebars',
    'templates',

    'views/ButtonSettingsView',
    'modules/spinnerControl'
], function (Backbone, Handlebars, JST, ButtonSettingsView, spinner) {
    "use strict";

    var ButtonsSettingsView;
    ButtonsSettingsView = Backbone.View.extend({
        className: "row",
        initialize: function () {
            this.spinnerStart();

            this.listenTo(this.collection, 'sync sort add update', this.render);
            this.listenTo(this.collection, 'sync', this.spinnerStop);
        },

        render: function() {
            var view = this;
            
            this.template = Handlebars.compile(JST.ButtonsSettings());

            this.$el.html(this.template());

            this.collection.each(function (model) {
                var buttonsSettings = new ButtonSettingsView({
                    model: model
                });

                view.$('#buttons-settings-container').append(buttonsSettings.render().$el);
            })

            return this;
        },

        spinnerStart: function () {
            spinner.show(true);
        },
        spinnerStop: function () {
            spinner.show(false);
        }

    });

    return ButtonsSettingsView;
});