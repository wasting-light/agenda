/**
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

/**
 * Create the database schema
 */

var EventoSchema = new Schema({
  nome: {
    type: String,
    default: ''
  },

  local: {
    type: String,
    default: ''
  },

  data: {
    type: String,
    default: ''
  },

  horario: {
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

module.exports = mongoose.model('Evento', EventoSchema);
