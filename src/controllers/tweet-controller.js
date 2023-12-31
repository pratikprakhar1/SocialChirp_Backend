import TweetService from "../services/tweet_service.js";

import upload from '../config/file-upload-s3-config.js';

const singleUploader = upload.single('image');


const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
      singleUploader(req, res, async function (err) {
        if (err) {
          return res.status(500).json({
            success: false,
            message: 'Image upload failed',
            data: {},
            err: err.message
          });
        }
  
        // Handle the case where no image is provided
        const imageUrl = req.file ? req.file.location : undefined;
  
        // Validate that the content is present
        const { content } = req.body;
        if (!content) {
          return res.status(400).json({
            success: false,
            message: 'Content is required',
            data: {},
            err: 'Content is required'
          });
        }
  
        const payload = { content, image: imageUrl };
        const response = await tweetService.create(payload);
  
        return res.status(201).json({
          success: true,
          message: 'Successfully created a new tweet',
          data: response,
          err: {}
        });
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        data: {},
        err: error.message
      });
    }
  }

export const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched a tweet',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error.message
        });
    }
}
