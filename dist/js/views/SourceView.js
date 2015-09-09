define([
    'backbone',
    'handlebars',
    'templates'
], function (Backbone, Handlebars, JST) {
    "use strict";

    var SourceView;
    SourceView = Backbone.View.extend({
        tagName: 'tr',
        events: {
            'click .fa-trash-o': 'deleteSource'
        },
        initialize: function () {
            this.listenTo(this.model, 'remove', this.remove);
        },
        render: function() {
            this.template = Handlebars.compile(JST.Source(this.model.toJSON()));
            this.$el.append(this.template());
            return this;
        },
        deleteSource: function (event) {
            event.preventDefault();
            this.model.destroy();
            this.remove();
        }
    });

    return SourceView;
});