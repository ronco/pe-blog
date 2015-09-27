import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let author = this.modelFor('author').id;
    return this.get('store').query('post', {author});
  }
});
