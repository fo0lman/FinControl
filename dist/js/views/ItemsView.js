define([
    'backbone',
    'handlebars',
    'templates',

    'views/ItemView',
    'views/modules/spinner'
], function (Backbone, Handlebars, JST, ItemView, SpinnerView) {
    "use strict";

    var ItemsView;
    ItemsView = Backbone.View.extend({
        className: "row",
        initialize: function () {
            this.spinnerStart();
            this.listenTo(this.collection, 'add', this.renderItem);
            this.listenTo(this.collection, 'sync update', this.render);
            this.listenTo(this.collection, 'update', this.checkListSize);
            this.listenTo(this.collection, 'sync', this.spinnerStop);
        },
        renderItem: function (item) {
            var itemView = new ItemView({
                model: item
            });
            this.$('#items-container').append(itemView.render().$el);
        },
        render: function() {
            this.template = Handlebars.compile(JST.Items());
            this.$el.html(this.template());
            var lastTenModelsArr = this.collection.last(10);
            lastTenModelsArr.forEach(this.renderItem, this);
            return this;
        },
        checkListSize: function () {
            if (this.collection.length > 10) {
                this.render();
            }
        },
        spinnerStart: function () {
            if (!window.spinner) {
                this.spin = new SpinnerView();
                window.spinner = true;
            }
        },
        spinnerStop: function () {
            if (this.spin) {
                var spin = this.spin;
                spin.removeSpinner();
            }
        }
    });

    return ItemsView;
});