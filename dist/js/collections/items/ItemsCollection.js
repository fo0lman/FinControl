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
], function (Backbone, bbfire, AuthModule, ItemModel, balance) {
    "use strict";

    var ItemsCollection;

    /**
    * @class ItemsCollection
    */
    ItemsCollection = Backbone.Firebase.Collection.extend({
        model: ItemModel,

        comparator: function (m) {
            return -m.get('date');
        },

        /**
        * @constructs ItemsCollection
        */
        initialize: function () {
            this.setUrl();
            this.listenTo(this, 'all', function (eventName) {
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
        setBalance: function () {
            var sum = 0;

            this.each(function (model) {
                sum += parseInt(model.get('sum'), 10);
            })

            balance.getBalance().set('count', sum);
        },

        setUrl: function () {
            var uid = AuthModule.getUserData().uid,
                ref = AuthModule.rootRef;
            this.url = ref.child('items').child(uid);
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
        getDataForChart: function ( options ) {

            var dateStart = options.dateStart,
                dateEnd = options.dateEnd,
                itemType = options.itemType,
                outputData = [];

            var data = this.chain()
            // фильтр по периоду
            .filter(function (model) {
                var date = model.get('date');
                return (date >= dateStart && date <= dateEnd);
            })
            // фильтр по типу операций (доходы/расходы)
            .filter(function (model) {
                if (itemType === 'all') {
                    return true;
                }
                if (itemType === 'income') {
                    return model.get('sum') > 0;
                } else {
                    return model.get('sum') < 0;
                }
            })
            // группировка по категориям доходов/расходов
            .groupBy(function (model) {
                if (itemType === 'all') {
                    return (model.get('sum') > 0) ? 'income' : 'costs';
                } else {
                    return model.get('category');
                }
            })
            // сформируем массив массивов, с суммированием значений по категориям 
            // или видам операций
            .forEach(function (item, i, arr) {
                var tempArr = [];

                // запишем категорию доходов/расходов или вид операциий
                tempArr.push(i);
                // по каждой категории или виду операций просуммируем значения (преобразовав
                // из строки в абсолютное число
                tempArr.push( Math.abs( item.reduce(function (memo, value) {
                    return memo + Number( value.get('sum') );
                }, 0) ) );
                
                outputData.push(tempArr);
           });

            return outputData;
       }
      });

    return ItemsCollection;
});