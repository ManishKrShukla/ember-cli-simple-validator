/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-simple-validator',
  isDevelopingAddon: function() {
    return true;
  },
  included: function(app) {
    app.import('vendor/style.css');
  }
};
