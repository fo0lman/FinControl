define([
    'backbone',
    'handlebars',
    'templates',
    'modules/authorization',
    'models/balance/BalanceControl',
    'collections/items/ItemsControl',
    'collections/buttons/ButtonsControl',
    'modules/spinnerControl'
], function (Backbone, Handlebars, JST, UserModule, BalanceControl, ItemsControl, ButtonsControl, spinner) {
    "use strict";

    var UserMenuView;
    UserMenuView = Backbone.View.extend({
        events: {
            'click #signout': 'logOutUser'
        },
        initialize: function () {
            if ( UserModule.getUserAuthStatus() ) {
                this.template = Handlebars.compile( JST.UserMenuLogin( { username: UserModule.getUserData().fullName} ) );
            } else {
                this.template = Handlebars.compile( JST.UserMenuLogout() );
            }
            $('#navbar').append(this.render().el);
        },
        render: function() {
            this.$el.html(this.template());
            return this;
        },
        logOutUser: function () {
            BalanceControl.clearBalance();
            ItemsControl.clearItemsCollection();
            ButtonsControl.clearButtonsCollection();
            spinner.clear();
            UserModule.logoutUser();
        }
    });
    return UserMenuView;
});