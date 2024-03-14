const { User } = require('../models');

const userData = [
    {
        username: 'user1',
        email: 'user1@example.com',
        password: 'password1',
        name: 'Default User'
    },
    {
        username: 'user2',
        email: 'user2@example.com',
        password: 'password2',
        name: 'Default User'
    },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
