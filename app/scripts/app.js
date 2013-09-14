define([
    "underscore",
    "backbone",
    "marionette",
    "vent",
    "models/Character",
    "views/CharacterView"
],

function (_, Backbone, Marionette, vent, Character, CharacterView) {

    var App = new Backbone.Marionette.Application();

    // An init function for your main application object
    App.addInitializer(function () {
        this.root = '/';

        var character = new Character();
        var characterView = new CharacterView({ model: character });

        this.addRegions({
          character: '#character'
        });

        this.character.show(characterView);

        this.listenTo(character, 'change', function() {
          this.character.show(characterView);
        });

        _.each(['str', 'dex', 'con', 'int', 'wis', 'cha'], function(stat) {

          vent.on(stat + ':max ' + stat +':min', function(event) {
            characterView.showValueError(stat);
          });

        });

        vent.on('points:empty', function(event) {
          characterView.showValueError('points');
        })
    });

    // Add as many of these as you like
    App.addInitializer(function () {

    });

    // Return the instantiated app (there should only be one)
    return App;

});
