import { TweetRepository , HashtagRepository } from '../repository/index.js'

class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }
    //Create:
    async create(data){
        const content = data.content;
        //Create:
        const tweet = await this.tweetRepository.create(data);
        const tagSep = content.match(/#[a-zA-Z0-9_]+/g);
        if(!tagSep){
            return tweet;
        }
        const tags = tagSep.map((tag) => tag.substring(1).toLowerCase());
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]};
        });
        const response = await this.hashtagRepository.bulkCreate(newTags);
        //Why we don't use await before save : Beacause this thing can go parallely and we don't need to wait for it:
        alreadyPresentTags.forEach((tag) =>{
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet;
    }
}

export default TweetService;

/*
This is my #FIRst #tweet . I am really excited .
*/