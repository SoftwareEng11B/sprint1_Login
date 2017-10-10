var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    entries = require('./customers.json'),
    Customer = require('./CustomerSchema.js'), 
    config = require('./config.js');
var assert = require('assert');

 var customers = entries.entries;

var insertCustomer = function(index, db, callback) {
   var currentDate = new Date();
   db.collection('customers').insertOne( {
        name: customers[index].name,
        email: customers[index].email,
        password: customers[index].password,
        created_at: currentDate,
        updated_at: currentDate
   }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted #" + index + " document into the customers collection.");
    callback();
  });
};
/* Connect to your database */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(config.db.uri, function(err,db){
  assert.equal(null, err);
  for(var i = 0; i < customers.length; i++){
    insertCustomer(i, db, function() {
      db.close();
    });
  }
});
