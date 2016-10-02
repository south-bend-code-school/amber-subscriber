/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'amber-subscriber',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    firebase: {
      apiKey: 'AIzaSyAsrsesV1bbGPaEAgCk_mB1LuLDjkTmClw',
      authDomain: 'amber-cab84.firebaseapp.com',
      databaseURL: 'https://amber-cab84.firebaseio.com',
      storageBucket: 'amber-cab84.appspot.com',
      messagingSenderId: "537443621255"
    },
    contentSecurityPolicy: {
      'script-src': "'self' wss://*.firebaseio.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },

    APP: {
      Watson: {
        URL: "https://atthack2016amberalert.mybluemix.net",
      },
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
  }

  if (environment === 'production') {

  }

  return ENV;
};
