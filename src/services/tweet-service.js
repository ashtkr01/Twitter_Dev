const { TweetRepository } = require('../repository/index');
const { HashtagRepository } = require('../repository/index')

class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }
    //Create:
    async create(data){

        //Find out all the hashtag :
        const content = data.content;
        //Insert tweet:
        const tweet = await this.tweetRepository.create(data);
        const tagss = content.match(/#[a-zA-Z0-9_]+/g); //This regex extracts hashtags:
        const tags = tagss.map((tag) =>{
            return tag.substring(1);
        });
        // console.log(tags);
        //Map :
        const hashtagId = [];
        for(const item of tags){
            const hashtag = await this.hashtagRepository.findOne({title : item});
            console.log("Print");
            console.log(hashtag);
            // //Find:
            if(hashtag){
                tweet.hashtags.push(hashtag.id);
                await tweet.save();
                hashtag.tweets.push(tweet.id);
                await hashtag.save();
            }
            else{
                const hashtag = await this.hashtagRepository.create({title : item});
                tweet.hashtags.push(hashtag.id);
                await tweet.save();
                hashtag.tweets.push(tweet.id);
                await hashtag.save();
            }
        }    
        // const content = data.content;
        // const tagss = content.match(/#[a-zA-Z0-9_]+/g); //This regex extracts hashtags
        // tags = tagss.map((tag) => {
        //     tag.substring(1);
        // });
        // console.log(tags);
        // const tweet = await this.tweetRepository.create(data);
        /*
        To do create hashtags and add here
        1: bulkcreate in mongoose
        2: filter title of hashtags based on multiple tags
        3: How to add tweets id inside all the hashtags:
        */
       return tweet;
    }
}

module.exports = TweetService;

/*
This is my #FIRst #tweet . I am really excited .
*/