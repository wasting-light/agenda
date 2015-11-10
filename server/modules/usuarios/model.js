/**
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

/**
 * Create the database schema
 */

var UsuarioSchema = new Schema({
  nome: {
    type: String,
    default: ''
  },

  sobrenome: {
    type: String,
    default: ''
  },

  data: {
	type: String,
	default: ''
  },

  email: {
	type: String,
	default: ''
  },

  telefone: {
	type: String,
	default: ''
  },

  cpf: {
	type: String,
	default: ''
  },

  endereco: {
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

module.exports = mongoose.model('Usuario', UsuarioSchema);
