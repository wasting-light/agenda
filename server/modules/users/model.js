/**
 * Module dependencies
 */

var bcrypt   = require('bcryptjs');
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

  password: {
    type: String,
    select: false
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
 * User methods and pre actions
 */

UserSchema.pre('save', function(next) {
  var user = this;

  if(!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    done(err, isMatch)
  });
};

/**
 * Expose the database model
 */

module.exports = mongoose.model('User', UserSchema);
