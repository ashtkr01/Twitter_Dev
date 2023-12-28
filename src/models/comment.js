import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    // content always be there
    content : {
        type : String,
        required : true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    onModel: {
        type: String,
        required: true,
        enum: ['Tweet' , 'Comment']
    },
    commentable : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
} , {timestamps : true});


//Automatic Mongo will make collection to be pluralise i.e Tweet --> Tweets:
const Comment = mongoose.model('Comment' , commentSchema);
export default Comment;