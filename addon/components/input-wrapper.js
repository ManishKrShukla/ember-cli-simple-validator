import Ember from 'ember';
import layout from '../templates/components/input-wrapper';
import {ValidationMixin, validate} from "../mixins/validator";

export default Ember.Component.extend(ValidationMixin, {
  layout,
  submitted: true,
  rule: '',
  model: '',
  _index : -1,
  //validity: Ember.computed.alias('valid'),

  modelValidation: validate('model'),

  focusOut: function (evt) {
    this.$(".error-msg").removeClass("hide-message");
    this.setFlag(this.get('modelValidation'));
  },

  didInsertElement() {
    this.$(".error-msg").addClass("hide-message");
  },

  willDestroyElement() {
    this.setFlag(true);
  },

  setFlag(value) {
    if (this.get('_index') === -1) {
      let index = _.findIndex(this.get('validations'), {'key': this.get('key')});
      this.set('_index', index);
    }

    if (this.get('index') !== -1) {
      this.set('validations.' + this.get('_index') + ".valid", value);
    }
  }

});
