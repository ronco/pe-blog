import DS from 'ember-data';

let { attr, belongsTo } = DS;

export default DS.Model.extend({
  title:   attr('string'),
  author:  belongsTo('author'),
  date:    attr('date'),
  content: attr('string')
});
