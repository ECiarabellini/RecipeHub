const User = require('./User');
const Recipe = require('./Recipe');


// fill in associations here similar to: ///
// User.hasMany(Post, {
//     foreignKey: 'created_by',
// });

// Post.belongsTo(User, {
//     foreignKey: 'created_by',
// });


module.exports = { User, Recipe };
