const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    // content always be there
    content : {
        type : String,
        required : true
    },
    //userEmail may be or may not be present there:
    userEmail : {
        type : String
    }
} , {timestamps : true});


//Automatic Mongo will make collection to be pluralise i.e Tweet --> Tweets:
const Comment = mongoose.model('Comment' , commentSchema);
module.exports = Comment;