define([
    'backbone',

    'models/modelItem'
], function (Backbone, Model) {
    "use strict";

    var Items;

    Items = Backbone.Collection.extend({
        model: Item,

        // sort book by date
        comparator: 'date',

        sortItems: function (sortData) {

          this.comparator = sortData;
          
          this.sort();
        }
    });

    return Items;
});