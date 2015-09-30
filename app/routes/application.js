import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('author');
  },

  headTags() {
    return [
      {
        tagId: 'og:title',
        type: 'meta',
        attrs: {
          property: 'og:title',
          content: "The Latest Happenings At New New York's Greatest Delivery Service"
        }
      },
      {
        tagId: 'og:site_name',
        type: 'meta',
        attrs: {
          property: 'og:site_name',
          content: "Planet Express Blog",
        }
      },
      {
        tagId: 'og:description',
        type: 'meta',
        attrs: {
          property: 'og:description',
          content: "The Employees of Planet Express, New New York's Greatest Delivery Service, have a lot to say.  Hear all their latest musings on the Planet Express Blog.",
        }
      },
      {
        tagId: 'og:image',
        type: 'meta',
        attrs: {
          property: 'og:image',
          content: "/images/pe-logo.png",
        }
      },
      {
        tagId: 'og:url',
        type: 'meta',
        attrs: {
          property: 'og:url',
          content: window.location,
        }
      },
    ];
  }
});
