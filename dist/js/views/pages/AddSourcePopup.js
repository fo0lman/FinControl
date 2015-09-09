define([
    'backbone',
    'handlebars',
    'templates',
    'models/sources/SourceModel',
    'collections/sources/SourcesControl'
], function(Backbone, Handlebars, JST, Source, Sources) {
    "use strict";

    var AddSourcePopupView;
    AddSourcePopupView = Backbone.View.extend({
        events: {
            'click #btnCreate': 'addSource'
        },

        initialize: function() {
            this.template = Handlebars.compile(JST.AddSourcePopup());
            
            this.collection = Sources.getSourcesCollection();

            $('body').append(this.render().el);

            $('#modalSource').modal();

            $('#modalSource').on('hidden.bs.modal', this.close);
            $('#modalSource').on('shown.bs.modal', function () {
                $('#inputName').focus();
            });
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        },
        addSource: function( e ) {

            var newSourceName = $('.modal-body').find('#inputName').val();

            // var source = new Category( {title: newSourceName} );
            this.collection.create({
                title: newSourceName
            });

            $('#modalSource').modal('hide');
        },
        close: function() {

            this.parentElement.remove();
        }
    });

    return AddSourcePopupView;
});
