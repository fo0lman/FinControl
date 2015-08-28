/**
 * A module that returns ItemCollection class
 * @module collections/items/ItemCollection
 *
 * @example
 * // creating instance
 * var ItemCollection = require(['collections/items/ItemCollection']);
 * var itemCollection = new ItemCollection;
 *
 * @requires modules/authorization
 * @requires models/items/ItemModel
 * @requires models/balance/BalanceControl
 */

define([
    'backbone',
    'backbonefire',
    'modules/authorization',
    'models/items/ItemModel',
    'models/balance/BalanceControl'
], function(Backbone, bbfire, AuthModule, ItemModel, balance) {
    "use strict";

    var ItemsCollection;

    /**
     * @class ItemsCollection
     */
    ItemsCollection = Backbone.Firebase.Collection.extend({
        model: ItemModel,
        // filtered: new Backbone.Collection,

        comparator: function(m) {
            return -m.get('date');
        },

        /**
         * @constructs ItemsCollection
         */
        initialize: function() {
            this.setUrl();
            this.listenTo(this, 'all', function(eventName) {
                console.info('Items collection', eventName)
            });

            /* after each collection update, recalculate total balance */
            this.listenTo(this, 'update', this.setBalance);
        },

        /**
         * set data for Balance model
         * get each record of item and sum it
         * after set property of count in balance model
         * @method
         */
        setBalance: function() {
            var sum = 0;

            this.each(function(model) {
                sum += parseInt(model.get('sum'), 10);
            })

            balance.getBalance().set('count', sum);
        },

        setUrl: function() {
            var uid = AuthModule.getUserData().uid,
                ref = AuthModule.rootRef;
            this.url = ref.child('items').child(uid);
        },

        getDataForChart: function(options) {

            var dateStart = options.dateStart,
                dateEnd = options.dateEnd,
                itemType = options.itemType,
                chartType = options.chartType;

            var data = [];

            if (chartType === 'pie') {
                data = this.getDataForPieChart(options);
            } else if (chartType === 'line') {
                data = this.getDataForLineChart(options);
            } else {

            }

            return data;
        },

        getDataForPieChart: function(opt) {

            var data = [],
                output = [];

            data = this.getDataByDateRange(opt.dateStart, opt.dateEnd, true)
                .getDataByItemType(opt.itemType, true)
                .groupDataByCategory(opt.itemType, true)
                .filtered;

            data.forEach(function(item, i, arr) {
                var tempArr = [];
                tempArr.push(i);
                tempArr.push(Math.abs(item.reduce(function(memo, value) {
                    return memo + Number(value.get('sum'));
                }, 0)));

                output.push(tempArr);
            });

            this.filtered = null;

            return output;
        },

        getDataForLineChart: function(opt) {
            var data = [],
                output = [];

            data = this.getDataByDateRange(opt.dateStart, opt.dateEnd, true)
                .groupDataByDate(true)
                .filtered;

            var dateArr = [];
            dateArr[0] = 'x';

            var incomeArr = [];
            incomeArr[0] = 'income';

            var costsArr = [];
            costsArr[0] = 'costs';

            data.forEach(function(item, i, arr) {

                dateArr.push(i);

                incomeArr.push(item.reduce(function(memo, value) {
                    var val = Number(value.get('sum'));

                    if (val > 0) {
                        return memo + val;
                    } else {
                        return 0;
                    }
                }, 0));

                costsArr.push(item.reduce(function(memo, value) {
                    var val = Number(value.get('sum'));

                    if (val < 0) {
                        return memo + val;
                    } else {
                        return 0;
                    }
                }, 0));


            });

            output.push(dateArr, incomeArr, costsArr);

            this.filtered = null;

            return output;
        },

        getDataByDateRange: function(from, to, chain) {

            var coll = (this.filtered) ? this.filtered : this;

            this.filtered = _(coll.filter(function(model) {
                var date = model.get('date');
                return (date >= from && date <= to);
            }));

            if (chain) {
                return this;
            } else {
                var result = this.filtered.value();
                this.filtered = null;
                return result;
            }
        },

        getDataByItemType: function(type, chain) {

            var coll = (this.filtered) ? this.filtered : this;

            this.filtered = _(coll.filter(function(model) {
                if (type === 'all') {
                    return true;
                }
                if (type === 'income') {
                    return model.get('sum') > 0;
                } else {
                    return model.get('sum') < 0;
                }
            }));

            if (chain) {
                return this;
            } else {
                var result = this.filtered.value();
                this.filtered = null;
                return result;
            }
        },

        groupDataByCategory: function(type, chain) {

            var coll = (this.filtered) ? this.filtered : this;

            this.filtered = _(coll.groupBy(function(model) {
                if (type === 'all') {
                    return (model.get('sum') > 0) ? 'income' : 'costs';
                } else {
                    return model.get('category');
                }
            }));

            if (chain) {
                return this;
            } else {
                var result = this.filtered.value();
                this.filtered = null;
                return result;
            }
        },
        groupDataByDate: function(chain) {

            var coll = (this.filtered) ? this.filtered : this;

            this.filtered = _(coll.groupBy(function(model) {
                var date = model.get('date');

                var myDate = new Date(date);

                var yyyy = myDate.getFullYear();
                var mm = myDate.getMonth() + 1;
                if (mm < 10) {
                    mm = '0' + mm;
                }
                var dd = myDate.getDate();
                if (dd < 10) {
                    dd = '0' + dd;
                }

                var formatDate = yyyy + '-' + mm + '-' + dd;

                return formatDate;
            }));

            if (chain) {
                return this;
            } else {
                var result = this.filtered.value();
                this.filtered = null;
                return result;
            }
        },




        /**
         * Return data for building charts
         *
         * @param {Object} options - Options for data
         * @param {Date} options.dateStart - Start date for building chart
         * @param {Date} options.dateEnd - End date for building chart
         * @param {String} options.itemType - Type of operation (all, income, costs)
         *
         * @method
         * @returns {Array} - Data for chart
         */

    });

    return ItemsCollection;
});
