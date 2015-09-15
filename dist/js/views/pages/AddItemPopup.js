define([
    'backbone',
    'handlebars',
    'templates',
    'modules/datePicker',
    'collections/categories/CategoriesControl',
    'collections/sources/SourcesControl'
], function (Backbone, Handlebars, JST, datepicker, CategoriesControl, SourcesControl) {
    "use strict";

    var AddItemPopupView;
    AddItemPopupView = Backbone.View.extend({
        className: 'modal isShowPopup',
        attributes: {
            id: 'modalPopup'
        },
        events: {
            'click .js-close': 'close',
            'click .js-add-item': 'addItem',
            'submit .add-item-form': 'addItem',
            'mouseover .dateInput': 'createDatepicker'
        },
        

        initialize: function() {
            this.categories = CategoriesControl.getCategoriesCollection();
            this.sources = SourcesControl.getSourcesCollection();

            if (this.categories.length && this.sources.length) {
                this.render();
            } else {
                this.listenTo(this.categories, 'sync', this.render);
                this.listenTo(this.sources, 'sync', this.render);
            }                     
        },

        render: function() {
            this.template = Handlebars.compile(JST.AddItemPopup({
                categories: this.categories.toJSON(),
                sources: this.sources.toJSON()
            }));          
            this.$el.html(this.template());
            $('body').append(this.el);
            return this;
        },
        addItem: function (event) {
            event.preventDefault();
            this.trigger('addform:submitted', {
                date: this.toTimestamp( this.$('#inputDate').val() ),
                sum: this.$('#inputSum').val(),
                category: this.$('#inputCategory').val(),
                source: this.$('#inputSource').val()
            });
            this.close();
        },
        close: function() {
            this.remove();
        },
        createDatepicker: function ( e ) {
            $(e.currentTarget).datepicker();
        },
        toTimestamp: function(strDate, strParam) {

            strDate = strDate.split('/');

            var date = new Date(strDate[2], strDate[1] - 1, strDate[0]);

            if (strParam === 'start') {
                date.setHours(0, 0, 0, 0);
            } else {
                date.setHours(23, 59, 59, 999);
            }

            return Date.parse(date);
        }
    });

    return AddItemPopupView;
});