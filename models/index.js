const User = require('./User');
const Recipe = require('./Recipe');

// fill in associations here similar to: ///
// User.hasMany(Post, {
//     foreignKey: 'created_by',
// });
User.hasMany(Recipe, {
    foreignKey: 'user_id', l
});

// Post.belongsTo(User, {
//     foreignKey: 'created_by',
// });
Recipe.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Recipe };
