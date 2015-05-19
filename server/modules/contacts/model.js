/**
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

/**
 * Create the database schema
 */

var ContactSchema = new Schema({
  name: {
    type: String,
    default: ''
  },

  avatar: {
    type: String,
    default: ''
  },

  phone: {
    type: String,
    default: ''
  },

  email: {
    type: String,
    default: ''
  },

  address: {
    type: String,
    default: ''
  },

  isFavorite: {
    type: Boolean,
    default: false
  }

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

module.exports = mongoose.model('Contact', ContactSchema);
