define([
    'backbone',
    'handlebars',
    'templates',
    'collections/items/ItemsControl'
], function (Backbone, Handlebars, JST, ItemsControl) {
    "use strict";

    var StatisticsFilterView;
    StatisticsFilterView = Backbone.View.extend({
        className: 'row',
        events: {
            'click .js-filter-button': 'filter'
        },
        initialize: function () {
            this.template = Handlebars.compile(JST.StatisticsFilter());

            this.collection = ItemsControl.getItemsCollection();
        },
        render: function () {
            this.$el.append(this.template());
            return this;
        },
        getFilterDateBegin: function () {
            return $('#inputDateBegin').val();
        },
        getFilterDateEnd: function () {
            return $('#inputDateEnd').val();
        },
        getFilterType: function () {
            return $('#inputType').val();
        },
        getFilterCategory: function () {
            return $('#inputCategory').val();
        },
        getFilterSource: function () {
            return $('#inputSource').val();
        },
        getSumFilter: function (type, model) {

            if (type === 'all') {
                return model.get('sum'); 
            } else {
                    if (type === 'income') { 
                        return model.get('sum') > 0;            
                    };
                    if (type === 'costs') { 
                        return model.get('sum') < 0;            
                    }; 
                }
        },
        filter: function (event) {
            event.preventDefault();
            console.log('filtered!');

            var dateBegin = this.getFilterDateBegin(); 
            var dateEnd = this.getFilterDateEnd(); 
            var type = this.getFilterType();
            var category = this.getFilterCategory();
            var source = this.getFilterSource();

            var itemCollection = new ItemsControl.getItemsCollection();
            this.collection.setFilter(category);
            this.collection.pager();

            var date = itemCollection.get('date');
            itemCollection.create({
                category: category,
                date: date>dateBegin && date<dateEnd,
                source: source,
                sum: this.getSumFilter(type, itemCollection)
            });
        }
    });

    return StatisticsFilterView;
});