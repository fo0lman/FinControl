define([
    'backbone',
    'handlebars',
    'templates'
], function (Backbone, Handlebars, JST) {
    "use strict";

    var StatisticsItemView;
    StatisticsItemView = Backbone.View.extend({
        tagName: 'tr',
        events: {
            'click .fa-trash-o': 'deleteItem',
            'click .fa-pencil-square-o': 'editItem'
        },
        initialize: function () {
            this.listenTo(this.model, 'remove', this.remove);
        },
        render: function() {
            this.convertTimeHelper();
            this.template = Handlebars.compile(JST.ItemStat(this.model.toJSON()));
            this.$el.append(this.template());
            return this;
        },
        deleteItem: function (event) {
            event.preventDefault();
            this.model.destroy();
        },
        editItem: function () {
            console.log('editItem');
        },
        convertTimeHelper: function () {
            Handlebars.registerHelper('convertTime', function(options) {
                var str = options.fn(this),
                    date = new Date( parseInt(str,10) ),
                    day = date.getDate(),
                    month = date.getMonth() + 1,
                    year = date.getFullYear(),
                    hours = date.getHours(),
                    minutes = date.getMinutes();
                if (!str) {
                    return '-';
                }
                if (day <= 9) { day = '0' + day; }
                if (month <= 9) { month = '0' + month; }
                if (hours <= 9) { hours = '0' + hours; }
                if (minutes <= 9) { minutes = '0' + minutes; }

                return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
            });
        }
    });

    return StatisticsItemView;
});