const mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var postingSchema = new Schema({
    subject: String,
    content: String,
    stared: Boolean 
});

postingSchema.method('toClient', function() {
    var obj = this.toObject();
 
    //Rename fields
    obj.id = obj._id;
    delete obj._id;
 
    return obj;
});
 
module.exports = mongoose.model('Posting', postingSchema); 