import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('post', params.post_id);
  },

  headTags() {
    let model = this.modelFor(this.routeName);
    let queryParams = {
      index_key: this.controllerFor('application').get('indexKey')
    };
    let router = this.get('router');
    let path = this.get('router').generate.apply(router, [
      'post', model, {
        queryParams: queryParams
      }
    ]);
    let cannonicalUrl = `${window.location.origin}${path}`;
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
      {
        tagId: 'og:url',
        type: 'meta',
        attrs: {
          property: 'og:url',
          content: cannonicalUrl,
        }
      },
    ];
  }
});
