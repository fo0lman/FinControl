/**
 * Created by Nick on 16.08.2015.
 */

define([
  'backbonefire',
  'modules/authorization'
], function (
  Backbonefire,
  authModule
) {

  var Balance = Backbone.Firebase.Model.extend({
    urlRoot: 'https://fincontrol.firebaseio.com',

    initialize: function () {
      this.setUrl();
    },

    setUrl: function () {
      var uid = authModule.getUserData().uid,
        ref = authModule.rootRef;

      this.urlRoot = ref.child('balance').child(uid);
    }
  });

  return Balance;
});

