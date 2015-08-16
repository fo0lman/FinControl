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

    initialize: function () {
      this.setUrl();
    },

    // вынес установку урл в отдельную функцию
    // ее необходимо вызывать после создания экземпляра
    setUrl: function () {
      // получаем uid текущего юзера
      // получем ссылку на базу
      var uid = authModule.getUserData().uid,
        ref = authModule.rootRef;

      // устанавливаем url методами child
      // данные по балансу лежат в ветке balance
      this.urlRoot = ref.child('balance').child(uid);
    }
  });

  return Balance;
});

