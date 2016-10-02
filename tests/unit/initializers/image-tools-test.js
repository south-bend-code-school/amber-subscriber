import Ember from 'ember';
import ImageToolsInitializer from 'amber-subscriber/initializers/image-tools';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | image tools', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ImageToolsInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
