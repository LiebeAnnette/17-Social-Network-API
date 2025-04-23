# 17-Social-Network-API

edX Bootcamp Homework Challenge 17 - NoSQL

## Description

This is a back-end API for a social network web application built with Express.js, MongoDB, and Mongoose ODM. It allows users to create accounts, post and delete thoughts, react to others’ thoughts, and manage friend lists. The application demonstrates full CRUD operations for Users and Thoughts, as well as nested CRUD operations for Reactions and Friend relationships.

This API is tested using Insomnia and is structured according to RESTful routing practices.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)
- [License](#license)
- [Badges](#badges)
- [Questions](#questions)

## Installation

1. Clone the Repository:

```bash
git clone git@github.com:LiebeAnnette/17-Social-Network-API.git

2. Navigate to the project directory:
   cd 17-Social-Network-API

3. Install dependencies:
   npm init -y
   npm install express mongoose
   npm install nodemon --save-dev
   npm install dotenv

4. Seed and start the server
   node seed.js
   npm run dev

## Usage

Use Insomnia to test the following API endpoints:

Users
GET /api/users – Retrieve all users

GET /api/users/:userId – Retrieve a single user by ID

POST /api/users – Create a new user

PUT /api/users/:userId – Update a user

DELETE /api/users/:userId – Delete a user and their associated thoughts

POST /api/users/:userId/friends/:friendId – Add a friend

DELETE /api/users/:userId/friends/:friendId – Remove a friend

Thoughts
GET /api/thoughts – Retrieve all thoughts

GET /api/thoughts/:thoughtId – Retrieve a single thought

POST /api/thoughts – Create a new thought and link it to a user

PUT /api/thoughts/:thoughtId – Update a thought

DELETE /api/thoughts/:thoughtId – Delete a thought

Reactions
POST /api/thoughts/:thoughtId/reactions – Add a reaction to a thought

DELETE /api/thoughts/:thoughtId/reactions/:reactionId – Remove a reaction from a thought

## Walkthrough Video

You can watch a full demo of the API routes in action here:
https://drive.google.com/drive/folders/1SbE6TqhWGtzMy2CCYCDhDlF_thVus777?usp=drive_link

## Contributing

My teachers, tutors, and my fellow students all contributed to helping me complete this homework assignment 😊
I also used code from previous projects and lessons, and also AI tools.

## License

MIT License

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions

https://github.com/LiebeAnnette/17-Social-Network-API
```
