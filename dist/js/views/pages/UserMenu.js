define([
    'backbone',
    'handlebars',
    'templates',
    'modules/authorization'
], function (Backbone, Handlebars, JST, UserModule) {
    "use strict";

    var UserMenuView;
    UserMenuView = Backbone.View.extend({
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
        }
    });
    return UserMenuView;
});