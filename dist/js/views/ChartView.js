define([
    'backbone',
    'handlebars',
    'templates'
], function(Backbone, Handlebars, JST) {
    "use strict";

    var ChartView;
    ChartView = Backbone.View.extend({
        className: "row",
        initialize: function() {
        },
        render: function() {
            this.template = Handlebars.compile(JST.Chart());
            this.$el.html(this.template());

            return this;
        }
    });

    return ChartView;
});
