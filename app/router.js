import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('post', {path: '/post/:id'});
  this.route('author', {path: '/author/:id'}, function() {
    this.route('post', {path: '/post/:id'});
  });
});

export default Router;
