const seedPosts = require('./post-seeds');
const userPosts = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log(' --- Database Synced --- ');
    await seedPosts();
    console.log(' --- Posts Seeded --- ');
    await userPosts();
    console.log(' --- Users Seeded --- ');

    process.exit(0);
}

seedAll();