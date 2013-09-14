define([
    'backbone',
    'vent'
],

function (Backbone, vent) {

  var costToIncrease = {
    9: 1,
    10: 2,
    11: 3,
    12: 4,
    13: 5,
    14: 7,
    15: 9,
    16: 12
  };

  return Backbone.Model.extend({

    defaults: {
      points: 30,
      str: 8,
      dex: 8,
      con: 8,
      wis: 8,
      int: 8,
      cha: 8,
    },

    incrementStat: function(stat) {
      console.log(stat);
      var options = {};
      var oldValue = this.get(stat);
      var newValue = oldValue + 1;

      console.log({oldValue: oldValue, newValue: newValue});

      options[stat] = newValue;
      options.points = this.get('points') - costToIncrease[newValue];

      if (oldValue != 8) options.points += costToIncrease[oldValue];

      if (newValue > 16 ) {
        vent.trigger(stat +':max');
        return;
      }

      if (options.points < 0) {
        vent.trigger('points:empty');
        return;
      }


      this.set(options);
    },

    decrementStat: function(stat) {
      var options = {};
      var oldValue = this.get(stat);
      var newValue = oldValue - 1;

      options[stat] = newValue;
      options.points = this.get('points') + costToIncrease[oldValue];
      if (newValue != 8) options.points -= costToIncrease[newValue];

      if (newValue < 8) {
        vent.trigger(stat +':min');
        return;
      }

      console.log(options);
      this.set(options);
    }
  });
});
