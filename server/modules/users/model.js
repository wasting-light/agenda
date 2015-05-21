/**
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

/**
 * Create the database schema
 */

var UserSchema = new Schema({
  name: {
    type: String,
    default: ''
  },

  avatar: {
    type: String,
    default: ''
  },

  email: {
    type: String,
    default: ''
  },

  created_at: {
    type: Date,
    default: Date.now
  },

  updated_at: {
    type: Date,
    default: Date.now
  }
});

/**
 * Expose the database model
 */

module.exports = mongoose.model('User', UserSchema);
