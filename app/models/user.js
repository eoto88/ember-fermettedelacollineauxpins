import DS from 'ember-data';
const { attr } = DS;

export default class UserModel extends DS.Model {
  @attr('string') name;
}
