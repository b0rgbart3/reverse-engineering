'use strict';
// Node's built-in file system methods
var fs        = require('fs');
// Note's helper method for generating paths
var path      = require('path');
// npm package -- an ORM for communicating with our Database
var Sequelize = require('sequelize');
// the path that this file itself is sitting in
var basename  = path.basename(module.filename);
// development environment
var env       = process.env.NODE_ENV || 'development';
// configuration / db credentials
var config    = require(__dirname + '/../config/config.json')[env];
// our sequelize instance
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
