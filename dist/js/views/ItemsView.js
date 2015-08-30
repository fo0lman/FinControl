define([
    'backbone',
    'handlebars',
    'templates',

    'views/ItemView',
    'modules/spinnerControl'
], function (Backbone, Handlebars, JST, ItemView, spinner) {
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

            this.listenTo(this.collection, "sort", this.render);
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
            this.delegateEvents({
                'click thead tr': 'sortByDate',
                'click thead tr': 'sortBySum',
                'click thead tr': 'sortByCategory',
                'click thead tr': 'sortBySource'
            });
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
            spinner.show(true);
        },
        spinnerStop: function () {
            spinner.show(false);
        },
        
        sortByDate: function(){
            this.collection.byDate();
        },
        sortBySum: function(){
            this.collection.bySum();
        },
        sortByCategory: function(){
            this.collection.byCategory();
        },
        sortBySource: function(){
            this.collection.bySource();
        }
    });

    return ItemsView;
});