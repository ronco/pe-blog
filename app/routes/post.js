import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('post', params.post_id);
  },

  headTags() {
    let model = this.modelFor(this.routeName);
    return [
      {
        tagId: 'og:title',
        type: 'meta',
        attrs: {
          property: 'og:title',
          content: model.get('title')
        }
      },
      {
        tagId: 'og:image',
        type: 'meta',
        attrs: {
          property: 'og:image',
          content: model.get('author.image'),
        }
      },
      {
        tagId: 'og:description',
        type: 'meta',
        attrs: {
          property: 'og:description',
          content: model.get('description'),
        }
      },
    ];
  }

});
