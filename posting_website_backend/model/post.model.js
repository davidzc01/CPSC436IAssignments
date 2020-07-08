const mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var postSchema = new Schema({
    subject: String,
    content: String,
    stared: Boolean 
});

postSchema.method('toClient', function() {
    var obj = this.toObject();
 
    //Rename fields
    obj.key = obj._id;
    delete obj._id;
 
    return obj;
});
 
module.exports = mongoose.model('Post', postSchema); 