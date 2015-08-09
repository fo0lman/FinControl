define([
    'backbone',
    'handlebars',
    'templates'
], function (Backbone, Handlebars, JST) {
    "use strict";

    var PageTitleView;
    PageTitleView = Backbone.View.extend({
        template: Handlebars.compile(JST.PageTitle()),

        initialize: function (options) {
            this.data = options.data;
        },
        render: function () {
            this.$el.html(this.template(this.data));
            return this;
        }
    });

    return PageTitleView;
});