const { BlogPost } = require('../models');

const postData = [
    {
        title: 'Javascript',
        text: 'Javascript is an asynchronous language designed to run in browsers.',
        user_id: 4,
    },
    {
        title: 'CSS',
        text: 'Cascading Style Sheets. It is used to style web pages.',
        user_id: 3,
    },
    {
        title: 'Jquery',
        text: 'This is a library for javascript, it is used to manipulate the DOM easily.',
        user_id: 2,
    },
    {
        title: 'Sequelize',
        text: 'This is an ORM it is a tool to use databases within webpages in a better way by using objects.',
        user_id: 1,
    },
];

const seedPosts = () => BlogPost.bulkCreate(postData);

module.exports = seedPosts;