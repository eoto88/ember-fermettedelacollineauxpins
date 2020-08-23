'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'ember-fermettedelacollineauxpins',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    firebase: {
      apiKey: "AIzaSyBDiQLvlG1sHpyztDo66OuRqdISiRsqL2g",
      authDomain: "fermette-colline-aux-pins.firebaseapp.com",
      databaseURL: "https://fermette-colline-aux-pins.firebaseio.com",
      projectId: "fermette-colline-aux-pins",
      storageBucket: "fermette-colline-aux-pins.appspot.com",
      messagingSenderId: "409101117678",
      appId: "1:409101117678:web:3ba051fdc5c7c70a316bff"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
