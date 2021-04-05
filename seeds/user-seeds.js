const { User } = require('../models');
const seedPosts = require('./post-seeds');

const userData = [
    {
        username: 'Admin',
        email: 'admin@admin.com',
        password: 'Password1234'
    },
    {
        username: 'JuanEch',
        email: 'juanech@fakemail.com',
        password: 'Password1234'
    },
    {
        username: 'Techy',
        email: 'techy@tech.com',
        password: 'Password1234'
    },
    {
        username: 'Albert',
        email: 'albert@einstein.com',
        password: 'Password1234'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;