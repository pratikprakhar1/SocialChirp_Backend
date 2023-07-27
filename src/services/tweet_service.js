import {TweetRepository,HashtagRepository } from '../repository/index.js'
export default class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository= new HashtagRepository();
    }
    async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g)
                     .map((tag) => tag.substring(1).toLowerCase());// this regex extracts hashtags 
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        
        let titleOfPresenttag = alreadyPresentTags.map(tags => tags.title)
        
        let newTags = tags.filter((tag) => !titleOfPresenttag.includes(tag));
        
        newTags= newTags.map(tag => {
            return {title: tag, tweets:[tweet.id]}
        } );

        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach(async (tag) =>{
            tag.tweets.push(tweet.id);
            await tag.save();
        } )

        return tweet;
    }
 
}


/**
 * this is my #first #tweet. I am really #excited
 */