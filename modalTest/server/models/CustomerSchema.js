var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;
	
var customerSchema = new Schema({

  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: {type: String, required: true}
});

customerSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
	 this.created_at = currentDate;
  next();
});

var Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
