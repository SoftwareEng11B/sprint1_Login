var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var artistSchema = new Schema({
  name: {type: String, required: true},
  address: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: Number, required: true},
  created_at: Date
});

listingSchema.pre('save', function(next) {
  if(!this.created_at){
    this.created_at = Date.now;
  }
  next();
});

var ArtistInfo = mongoose.model('ArtistInfo', artistSchema);

module.exports = ArtistInfo;
