define([
    'backbone',
    'handlebars',
    'templates'
], function (Backbone, Handlebars, JST) {
    "use strict";

    var AlertView;
    AlertView = Backbone.View.extend({
        events: {
            'click button' : 'removeAlert'
        },

        initialize: function (config) {
            this.template = Handlebars.compile(JST.Alert(config));
            $('body').append(this.render().el);
        },
        render: function () {
            this.$el.append(this.template());
            return this;
        },
        removeAlert: function () {
            this.remove();
        }
    });

    return AlertView;
});