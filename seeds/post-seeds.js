const { BlogPost } = require('../models');

const postData = [
    {
        title: 'postnumber1',
        text: 'hello',
        user_id: 4,
    },
    {
        title: 'postnumber2',
        text: 'hello',
        user_id: 3,
    },
    {
        title: 'postnumber3',
        text: 'hello',
        user_id: 2,
    },
    {
        title: 'postnumber4',
        text: 'hello',
        user_id: 1,
    },
];

const seedPosts = () => BlogPost.bulkCreate(postData);

module.exports = seedPosts;