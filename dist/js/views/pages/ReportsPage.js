define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates',
    'c3',
    'collections/ItemsControl'
], function(AbstractPage, Handlebars, JST, c3, ItemsControl) {
    "use strict";

    var ReportsPageView;
    ReportsPageView = AbstractPage.extend({
        title: 'Reports Page',
        events: {
            'submit': 'filter'
        },
        initialize: function() {
            this.template = Handlebars.compile(JST.ReportsPage({
                title: this.title
            }));
            this.collection = ItemsControl.getItemsCollection();
        },
        filter: function(event) {
            event.preventDefault();

            var options = this.getOptionsForChart();
            var myData = this.collection.getDataForChart( options );

            if (options.chartType === 'line') {

            } else {
                var chart = c3.generate({
                    data: {
                        columns: myData, 
                        type: 'pie'
                    }
                });
            }
        },
        getOptionsForChart: function () {
            return {
                chartType: $('.chartType:checked').val(),
                dateStart: this.toTimestamp( $('#inputDateBegin').val(), 'start' ),
                dateEnd: this.toTimestamp( $('#inputDateEnd').val(), 'end' ),
                itemType: $('.itemType').val()
            };
        },
        toTimestamp: function (strDate, strParam) {

            var date = new Date( Date.parse(strDate) );

            if (strParam === 'start') {
                date.setHours(0, 0, 0, 0);
            } else {
                date.setHours(23, 59, 59, 999);
            }

            return Date.parse(date);
        }
    });

    return ReportsPageView;
});
