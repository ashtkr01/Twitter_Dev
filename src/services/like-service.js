import { LikeRepository , TweetRepository } from "../repository/index.js";

import Like from '../models/like.js';

class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }
    
    async toggleLike(modelId , modelType , userId){ //   /api/v1/likes/toggle?id=modelid&type=Tweet
        if(modelType == 'Tweet'){
            //ToDo
            //Declare var so we have access within function:
            var likeable = await this.tweetRepository.find(modelId);
        }
        else if(modelType == 'Comment'){
            //ToDo
        }
        else{
            throw new Error("Unknown model type");
        }
        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            console.log("Instance");
            console.log(exists instanceof Like);
            /*Important : he line of code await exists.remove(); in Mongoose is likely intended to remove a document from the MongoDB database based on a condition specified by the exists variable. */
            await this.likeRepository.destroy(exists.id);
            var isAdded = false;
        }
        else{
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = true;
        }
        return isAdded;
    }
}

export default LikeService;