import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main', {path: '/help'},function() {
    this.route('sherlock', {path: '/sherlock'});
    this.route('thank-you', {path: '/thank-you'});
  });
});

export default Router;
