import { TweetRepository, HashtagRepository } from '../repository/index.js';

export default class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const tweet = await this.tweetRepository.create(data);
        const content = data.content; // Access the content from data
        
        if (content) { // Check if content is present
            const tags = content.match(/#[a-zA-Z0-9_]+/g);
            
            if (tags) { // Check if tags are present
                const lowercaseTags = tags.map((tag) => tag.substring(1).toLowerCase());
                let alreadyPresentTags = await this.hashtagRepository.findByName(lowercaseTags);
                let titleOfPresenttag = alreadyPresentTags.map((tag) => tag.title);
                let newTags = lowercaseTags.filter((tag) => !titleOfPresenttag.includes(tag));
                newTags = newTags.map((tag) => {
                    return { title: tag, tweets: [tweet.id] };
                });

                await this.hashtagRepository.bulkCreate(newTags);

                alreadyPresentTags.forEach(async (tag) => {
                    tag.tweets.push(tweet.id);
                    await tag.save();
                });
            }
        }

        return tweet;
    }

    async get(tweetId) {
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }
}



/**
 * this is my #first #tweet. I am really #excited
 */