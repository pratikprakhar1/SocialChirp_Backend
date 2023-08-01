import mongoose from 'mongoose';

const tweetScema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
        max: [250, 'Tweet cannot be more than 250 characters']
    },
    likes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Comment' 
    }]

},{timestamps: true });


const Tweet = mongoose.model('Tweet', tweetScema);
export default Tweet; 