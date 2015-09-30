import DS from 'ember-data';

let { attr, hasMany } = DS;

export default DS.Model.extend({
  name:        attr('string'),
  image:       attr('string'),
  description: attr('string'),
  posts:       hasMany('post', {
    async: true
  })
});
