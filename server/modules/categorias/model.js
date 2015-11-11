var mongoose = require('mongoose');
var Schema 	 = mongoose.Schema;

var CategoriaSchema = new Schema({
	nome: {
		type: String,
		default: ''
	},
	created_at: {
		type: Date,
		default: Date.nows
	},
	updated_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Categoria', CategoriaSchema);
