requirejs.config({
    deps: ['main'],
    paths: {
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/lodash/lodash',
        backbone: '../bower_components/backbone/backbone',
        marionette: '../bower_components/marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr' : '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        backboneEventbinder : '../bower_components/backbone.eventbinder/lib/amd/backbone.eventbinder',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',


        tpl: '../bower_components/requirejs-tpl/tpl'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
    }
});
