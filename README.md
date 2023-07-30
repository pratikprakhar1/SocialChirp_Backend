# Prerequisite

- User should be able to create a post
    - [The post/tweet cannot be more than 250 chars]
    - [Every post/tweet will be having support for image upload]

- Any post should be visible to all those users who follows the author
- Anyone who follows you can comment on a post/tweet
- Anyone who follows you can like on a post/tweet
- We can comment on a comment
- We can like any comment also
- Retweeting

- User profile:
    - Name
    - Follower count
    - Bio 
    - Last 10 tweets from the user

- Pagination on tweets 
- User auth 

- Every tweet might be having a hashtag

  # Twitter Backend

This is a simple project built with Node.js and Express, focusing on a social media platform for posting tweets and interacting with them through likes and comments.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The project is a basic social media platform that allows users to create and post tweets, like tweets, and leave comments on them. It provides RESTful API endpoints for performing these actions and communicates with a MongoDB database to store and retrieve data.

## Installation

To run the project locally, follow these steps:

1. Make sure you have Node.js installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the project directory using the terminal/command prompt.
4. Install the dependencies by running:

```bash
npm install
```

5. Ensure you have MongoDB installed and running on your system. Adjust the MongoDB connection settings in the `config/database.js` file if necessary.

## Usage

1. Start the server by running the following command:

```bash
npm start
```

2. The server will start on port 3000. You can access it by visiting `http://localhost:3000` in your web browser or using tools like Postman to interact with the API.

3. The API provides endpoints for creating tweets, liking tweets, and leaving comments. You can use the provided API routes to perform these actions.

## API Routes

Here are the main API routes available in the application:

- `POST /api/tweets`: Create a new tweet.
- `POST /api/tweets/:tweetId/like`: Like a tweet.
- `POST /api/tweets/:tweetId/comments`: Leave a comment on a tweet.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Passport.js (for authentication)
- JWT (JSON Web Tokens) for token-based authentication

## Contributing

Contributions to this project are welcome. If you find any issues or want to add new features, feel free to submit a pull request.

  
