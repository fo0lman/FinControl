define([
    'backbone',
    'backbonefire',
    'modules/authorization',
    'models/items/ItemModel'
], function (Backbone, bbfire, AuthModule, ItemModel) {
    "use strict";

    var ItemsCollection;

    ItemsCollection = Backbone.Firebase.Collection.extend({
        model: ItemModel,

        comparator: function (m) {
            return -m.get('date');
        },
        initialize: function () {
            this.setUrl();
            this.listenTo(this, 'all', function (eventName) {
                console.info('Items collection', eventName)
            });
        },
        setUrl: function () {
            var uid = AuthModule.getUserData().uid,
                ref = AuthModule.rootRef;
            this.url = ref.child('items').child(uid);
        },
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