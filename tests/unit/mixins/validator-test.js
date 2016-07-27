import Ember from 'ember';
import ValidatorMixin from 'ember-cli-simple-validator/mixins/validator';
import { module, test } from 'qunit';

module('Unit | Mixin | validator');

// Replace this with your real tests.
test('it works', function(assert) {
  let ValidatorObject = Ember.Object.extend(ValidatorMixin);
  let subject = ValidatorObject.create();
  assert.ok(subject);
});
