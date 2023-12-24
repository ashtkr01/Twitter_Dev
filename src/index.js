const express = require('express');

const app = express();

const TweetRepository = require('./repository/tweet-repository')
const HashtagRepository = require('./repository/hashtag-repository');

const TweetService = require('./services/tweet-service');

const Comment = require('./models/comment');

const Hashtag = require('./models/hashtags');

const connect = require('./config/database');

const PORT = 3000;

app.listen( async () =>{
    console.log(`Started listen at ${PORT}`);

    await connect();

    const tweetRepo = new TweetRepository();

    const hashtagRepo = new HashtagRepository();

    const tweetService = new TweetService();
    //Create:
    const tweet = await tweetService.create({content: 'Iam a bhakt of #rana and #sangha'});
    console.log(tweet);
    // const hashtag = await hashtagRepo.find({title : 'Support Bharat'});
    // console.log(hashtag);

    // const hashtag = await Hashtag.create({ title: 'I always Support Bharat till my last breathe'});
    // console.log(hashtag);

    // const tweet = await tweetRepo.create({
    //     content : 'Bappa Rawal',
    //     userEmail : 'bappa@gmail.com'
    // });

    // const tweet = await tweetRepo.getAll(2 , 3);
    //Call:
    // const tweet = await tweetRepo.create({
    //     content : 'Latest Content Now',
    //     userEmail : 'ranasangha2@getMaxListeners.com'
    // });
    // console.log(tweet);
    // const comment = await Comment.create({
    //     content : 'THis is the first Comment'
    // });
    // //Push:
    // tweet.comments.push(comment);
    // await tweet.save();

    // console.log(tweet);

    // console.log(tweet[0].contentWithEmail);

    // console.log(tweet);

    console.log('Database got Connected');
});