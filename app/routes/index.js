import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      authors: this.get('store').findAll('author'),
      posts: this.get('store').findAll('post')
    });
  }
});
