define([
    'views/pages/AbstractPage',
    'handlebars',
    'templates',
    'c3',
    'collections/items/ItemsControl',
    'modules/datePicker'
], function (AbstractPage, Handlebars, JST, c3, ItemsControl, datepicker) {
    "use strict";

    var ReportsPageView;
    ReportsPageView = AbstractPage.extend({
        className: 'row',
        title: 'Reports',
        events: {
            'submit': 'filter',
            'mouseover .dateInput': 'createDatepicker'
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
            var myData = this.collection.getDataForChart(options);

            if (options.chartType === 'line') {
                var chart = c3.generate({
                    data: {
                        x: 'x',                        
                        columns: myData
                    },
                    axis: {
                        x: {
                            type: 'timeseries',
                            tick: {
                                format: '%Y-%m-%d',
                                rotate: 90
                            }
                        },
                        y: {
                            label: {
                                text: 'UAH',
                                position: 'outer-middle'
                            }
                        }
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    }
                });
            } else {
                var chart = c3.generate({
                    data: {
                        columns: myData,
                        type: 'pie'
                    }
                });
            }
        },
        getOptionsForChart: function() {
            return {
                chartType: $('.chartType:checked').val(),
                dateStart: this.toTimestamp($('#inputDateBegin').val(), 'start'),
                dateEnd: this.toTimestamp($('#inputDateEnd').val(), 'end'),
                itemType: $('.itemType').val()
            };
        },
        toTimestamp: function(strDate, strParam) {

            strDate = strDate.split('/');

            var date = new Date(strDate[2], strDate[1] - 1, strDate[0]);

            if (strParam === 'start') {
                date.setHours(0, 0, 0, 0);
            } else {
                date.setHours(23, 59, 59, 999);
            }

            return Date.parse(date);
        },
        createDatepicker: function ( e ) {
            $(e.currentTarget).datepicker();
        }
    });

    return ReportsPageView;
});
