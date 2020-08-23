import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
    product: attr('string'),
    quantity: attr('number'),
    pickup: attr('string'),
    date: attr('date')
});