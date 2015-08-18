define([
    'backbone',
    'handlebars',
    'templates',

    'models/balance/getBalanceModel'
], function (Backbone, Handlebars, JST, getBalanceModel) {
    "use strict";

    var BalanceView;
    BalanceView = Backbone.View.extend({
        model: getBalanceModel(),
        initialize: function () {
            this.listenTo(this.model, 'sync', this.render)
        },
        render: function() {
            this.template = Handlebars.compile(JST.Balance(this.model.toJSON()));
            this.$el.html(this.template());
            return this;
        }
    });

    return BalanceView;
});