import TweetRepository from '../../src/repository/tweet-repository.js'
import Tweet from '../../src/models/tweet.js';

jest.mock('../../src/models/tweet.js');

describe('Create tweet tests' , () => {
    test('should create a new tweet and return it ' , async() => {
        const data = {
            content : 'Testing Tweet'
        }
        const spy = jest.spyOn(Tweet , 'create').mockImplementation(() => {
            return {...data , createdAt : '2023-01-06' , updatedAt : '2023-01-06'}
        });
        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.create(data);
        expect(spy).toHaveBeenCalled();
        expect(tweet.content).toBe(data.content);
        expect(tweet.createdAt).toBeDefined();
    });
    
    test('should not create a new tweet and throw exception' , async() => {
        const data = {
            content : 'Testing Tweet'
        }
        const spy = jest.spyOn(Tweet , 'create').mockImplementation(() => {
            throw new Error('Something went wrong');
        });
        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.create(data).catch(err => {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe('Something went wrong');
        });
    });
});

describe('Get all tweet test', ()=> {
    test('should get all tweet and return it ' , async() => {
        const data = {
            content : 'Testing Tweet'
        }
        const tweetsArray = [{...data , createdAt : '2023-01-06' , updatedAt : '2023-01-06'},{...data , createdAt : '2023-01-06' , updatedAt : '2023-01-06'},{...data , createdAt : '2023-01-06' , updatedAt : '2023-01-06'}];
        const findResponse = {tweetsArray};
        findResponse.limit = jest.fn((limit) => findResponse.tweetsArray.slice(0 , limit));
        findResponse.skip = jest.fn((offset) => findResponse);
        const spy = jest.spyOn(Tweet , 'find').mockImplementation(() => {
            return findResponse;
        });
        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.getAll(0 , 2);
        expect(spy).toHaveBeenCalled();
        
        expect(tweet).toHaveLength(2);
        // expect(tweet.content).toBe(data.content);
        // expect(tweet).toBeUndefined();
    });
});






// test('actually create a new tweet and return it ', async() => {
//     const data = {
//         content : 'Testing TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting TweetTesting Tweet'
//     }
//     const tweet = await Tweet.create(data);
//     expect(tweet).toBeUndefined();
// });