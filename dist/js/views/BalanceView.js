define([
    'backbone',
    'handlebars',
    'templates',

    'models/balance/BalanceControl'
], function (Backbone, Handlebars, JST, BalanceControl) {
    "use strict";

    var BalanceView;
    BalanceView = Backbone.View.extend({
        className: "row",
        initialize: function () {
            this.getBalanceModel();
            this.listenTo(this.model, 'sync', this.render);
            this.listenTo(this, 'change', this.render);
        },
        render: function() {
            this.template = Handlebars.compile(JST.Balance(this.model.toJSON()));
            this.$el.html(this.template());
            return this;
        },
        getBalanceModel: function() {
            this.model = BalanceControl.getBalance();
        }
    });

    return BalanceView;
});