var Categoria = require('./model');

module.exports = {
	create: create,
	retrieve: retrieve,
	findOne: findOne,
	update: update,
	remove: remove
};

function create(req, res, callback) {
	var categoria = new Categoria(req.body);

	categoria.save(function(err, data) {
		callback(err, data, res);
	});
}

function retrieve(req, res, callback) {
	var query = {};

	Categoria.find(query, function(err, data) {
		callback(err, data, res);
	})
}

function findOne(req, res, callback) {
  var id = req.params.id;
  var query = {_id: id};

  Categoria.findOne(query, function(err, data) {
    callback(err, data, res);
  });
}


function update(req, res, callback) {
  var id = req.params.id;
  var query = {_id: id};
  var mod = req.body;

  delete mod._id;

  Categoria.update(query, mod, function(err, data) {
    callback(err, data, res);
  });
}

function remove(req, res, callback) {
  var id = req.params.id;
  var query = {_id: id};

  Categoria.remove(query, function(err, data) {
    callback(err, data, res);
  });
}
