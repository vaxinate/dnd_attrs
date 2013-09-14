define([
    'backbone',
    'marionette',
    'templates',
],

function (Backbone, Marionette, templates) {

  return Backbone.Marionette.ItemView.extend({

    template: templates.characterView,

    events: {
      'click button.plus': 'onClickPlus',
      'click button.minus': 'onClickMinus'
    },

    initialize: function () {
    },


    onClickPlus: function(e) {
      var $clickedPlus = $(e.currentTarget);
      var stat = $clickedPlus.parents('.row').data('stat');

      this.model.incrementStat(stat);
    },

    onClickMinus: function(e) {
      var $clickedMinus = $(e.currentTarget);
      var stat = $clickedMinus.parents('.row').data('stat');

      this.model.decrementStat(stat);
    },

    showValueError: function(valueName) {
      //$('.' + valueName).pulse({'background-color': 'red'}, { pulses: 3 });

      console.log();
      var valueArea = $('[data-stat='+ valueName +'] .value');

      valueArea.css({'border': '2px solid red'})
      setTimeout(function() {
        console.log('callback!');
        valueArea.css({'border': '0px solid white'})
      }, 2000);

    }

    
  });
});
