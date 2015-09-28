import Ember from 'ember';

export default Ember.Route.extend({
  headTags: [
    {
      type: 'meta',
      attrs: {
        property: 'og:title',
        content: 'Hello EmberJS Denver Meetup'
      }
    }
  ]
});
