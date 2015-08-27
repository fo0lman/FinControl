define([
    'backbone'
], function (Backbone) {
    "use strict";

    var AbstractPageView;
    AbstractPageView = Backbone.View.extend({
        className: "row abstract-page",
        changeTitle: function (title) {
            document.querySelector('title').firstChild.nodeValue = title;
        },
        initialize: function () {
            this.listenTo(this, 'removePage', this.removePage);
            this.changeTitle(this.title);
            $('.js-page').append(this.el);
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        removePage: function () {
            this.remove();
        }
    });

    return AbstractPageView;
});