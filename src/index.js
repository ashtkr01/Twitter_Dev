import express from 'express';
import bodyParser from 'body-parser';

import { connect } from './config/database.js';

const PORT = 3000;

import apiRoutes from './routes/index.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

import { UserRepository , TweetRepository } from '../src/repository/index.js';
import LikeService from './services/like-service.js';
import TweetService from './services/tweet-service.js'

app.use('/api', apiRoutes);



app.listen(PORT, async () =>{
    console.log(`Started listen at ${PORT}`);

    await connect();

    // const userRepository = new UserRepository();
    // const tweetRepository = new TweetRepository();

    // const likeService = new LikeService();
    const tweetService = new TweetService();
    const tweet = await tweetService.create({
        content: "This is first tweet ranas"
    });
    // //Create:
    // const users = await userRepository.getAll();
    // // //gGet:
    // const tweets = await tweetRepository.getAll(0 , 2); 
    // // //Create Like:
    // const like = await likeService.toggleLike(tweets[0].id , 'Tweet' , users[0].id);
    // console.log(like);
    console.log('Database got Connected');
});