import Ember from 'ember';
import layout from '../templates/components/form-wrapper';

export default Ember.Component.extend({
  layout,

  validationsChanged: Ember.computed('validations.@each.valid', function () {
    let isValid = true;

    _.forOwn(this.get('validations'), function (rule) {
      if (_.has(rule, 'valid')) {
        console.log(rule.valid);
        isValid = isValid && rule.valid;
      }
    });

    this.set('isValid', isValid);
  }),
});
