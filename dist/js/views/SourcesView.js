define([
    'backbone',
    'handlebars',
    'templates',
    'views/SourceView',
    'collections/sources/SourcesControl'
], function (Backbone, Handlebars, JST, SourceView, Sources) {
    "use strict";

    var SourcesView;
    SourcesView = Backbone.View.extend({
        el: '#sources .items-container',

        initialize: function () {
            this.collection = Sources.getSourcesCollection();
            // this.listenTo(this.collection, 'add', this.renderItem);
            this.listenTo(this.collection, 'sync update', this.render);
            this.render();
        },
        renderSource: function (item) {
            var sourceView = new SourceView({
                model: item
            });
            this.$el.append(sourceView.render().$el);
        },
        render: function() {
            this.$el.empty();
            this.collection.each(function (item) {
                this.renderSource(item);
            }, this);
            return this;
        }
    });

    return SourcesView;
});