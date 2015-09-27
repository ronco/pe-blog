import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('post', {path: '/post/:id'});
  this.route('author');
});

export default Router;
