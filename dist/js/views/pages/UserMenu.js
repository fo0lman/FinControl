define([
    'backbone',
    'handlebars',
    'templates',
    'modules/authorization',
    'models/balance/BalanceControl',
    'collections/items/ItemsControl',
    'collections/buttons/ButtonsControl',
    'collections/categories/CategoriesControl',
    'modules/spinnerControl'
], function (Backbone, Handlebars, JST, UserModule, BalanceControl, ItemsControl, ButtonsControl, CategoriesControl, spinner) {
    "use strict";

    var UserMenuView;
    UserMenuView = Backbone.View.extend({
        el: '#navbar',
        events: {
            'click #signout': 'logOutUser',
            'click .top-menu a': 'setActive'
        },
        constructor: function () {
            if (!UserMenuView.instance) {
                UserMenuView.instance = this;
                Backbone.View.apply(UserMenuView.instance, arguments);
            }
            return UserMenuView.instance;
        },
        initialize: function () {
            this.listenTo(Backbone, 'login logout', this.render);
            this.render();
            this.setActive();
        },
        getTemplate: function () {
            if ( UserModule.getUserAuthStatus() ) {
                this.template = Handlebars.compile( JST.UserMenuLogin( { username: UserModule.getUserData().fullName} ) );
            } else {
                this.template = Handlebars.compile( JST.UserMenuLogout() );
            }
        },
        render: function() {
            this.getTemplate();
            this.$el.html(this.template());

            return this;
        },
        logOutUser: function () {
            
            BalanceControl.clearBalance();
            ItemsControl.clearItemsCollection();
            ButtonsControl.clearButtonsCollection();
            CategoriesControl.clearCategoriesCollection();

            spinner.clear();
            UserModule.logoutUser();
            Backbone.trigger('logout');
        },
        setActive: function ( e ) {
            var current = $('.top-menu li.active');

            if (!current.length > 0) {
                var url = location.href.substr(window.location.href.lastIndexOf("#"));
                $(".top-menu a").each(function () {
                    if($(this).attr("href") == url) {
                        $(this.parentElement).addClass("active");
                    }
                });
            } else {
                $(current).removeClass('active');
                $(e.currentTarget.parentElement).addClass('active');
            }
        }
    });
    return UserMenuView;
});