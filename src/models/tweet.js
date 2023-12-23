const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    // content always be there
    content : {
        type : String,
        required : true
    },
    //userEmail may be or may not be present there:
    userEmail : {
        type : String
    },
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ]
} , {timestamps : true});

/*Virtual : "virtuals" refer to fields that are not stored in the database but can be accessed as if they are. Virtuals are useful for computed properties or fields that depend on other data in the document. */
tweetSchema.virtual('contentWithEmail').get(function process(){
    return `${this.content} \nCreated by : ${this.userEmail}`;
});

/*Hooks : hooks are mechanisms that allow you to run custom logic or functions before or after certain operations on the database. These hooks are commonly referred to as "triggers" or "middleware" in other database systems. MongoDB provides hooks through a feature called "middleware" or "query middleware," and it is commonly used with Mongoose, which is an Object Data Modeling (ODM) library for MongoDB and Node.js.*/
tweetSchema.pre('save' , function(next){
    console.log('Before saving');
    //Call:
    next();
});
tweetSchema.post('save' , function(doc){
    console.log('Saved' , doc);
});


//Automatic Mongo will make collection to be pluralise i.e Tweet --> Tweets:
const Tweet = mongoose.model('Tweet' , tweetSchema);
module.exports = Tweet;