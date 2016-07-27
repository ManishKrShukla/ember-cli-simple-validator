import Ember from 'ember';
import layout from '../templates/components/input-wrapper';
import {ValidationMixin, validate} from "../mixins/validator";

export default Ember.Component.extend(ValidationMixin, {
  layout,
  submitted: true,
  rule: '',
  model: '',

  modelValidation: validate('model'),

  focusOut: function (evt) {
    this.$(".error-msg").removeClass("hide-message");
  },

  didInsertElement() {
    let self = this;
    this.$(".error-msg").addClass("hide-message");
  }

});
