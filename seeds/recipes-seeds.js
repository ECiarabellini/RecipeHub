const { Recipe } = require('../models');

const recipeData = [
    {
        title: 'Recipe 1',
        ingredients: 'Ingredient 1, Ingredient 2, Ingredient 3',
        instructions: 'Step 1: Do something, Step 2: Do something else',
        user_id: 1,
    },
    {
        title: 'Recipe 2',
        ingredients: 'Ingredient A, Ingredient B, Ingredient C',
        instructions: 'Step A: Do something, Step B: Do something else',
        user_id: 2,
    },

];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
