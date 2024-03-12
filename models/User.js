
const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {

    const User = sequelize.define('User', {

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    User.beforeCreate(async (user) => {

        user.password = await bcrypt.hash(user.password, 10);
    });


    return User;
};
