// models/Recipe.js
module.exports = function (sequelize, DataTypes) {

    const Recipe = sequelize.define('Recipe', {

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        instructions: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });



    // Return the defined Recipe model.
    return Recipe;
};
