const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');


// CREATE new recipe
//router.post('/', withAuth, async (req, res) => {    // !!!!! comment this out for testing in Insomnia
router.post('/', async (req, res) => {   // !!!! uncomment this out for testing in Insomni
    try {
        const newRecipe = await Recipe.create({
            title: req.body.title,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            user_id: req.session.user_id,   // !!!!! comment this out for testing in Insomnia
            //user_id: req.body.user_id,       // !!!! uncomment this out for testing in Insomnia

        });
        res.status(201).json(newRecipe);
    } catch (err) {
        console.log(err);
    }
});


// EDIT existing recipe
router.put('/:id', withAuth, async (req, res) => {   // !!!!! comment this out for testing in Insomnia
//router.put('/:id', async (req, res) => {   // !!!! uncomment this out for testing in Insomni
    try {
        const recipe = await Recipe.findByPk(req.params.id);

        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        // Update the recipe with the new data
        recipe.title = req.body.title;
        recipe.ingredients = req.body.ingredients;
        recipe.instructions = req.body.instructions;

        await recipe.save();

        res.json(recipe);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/:id', withAuth, async (req, res) => {   // !!!!! comment this out for testing in Insomnia
//router.delete('/:id', async (req, res) => {   // !!!! uncomment this out for testing in Insomni
    try {
        const recipeData = await Recipe.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!recipeData) {
            res.status(404).json({ message: 'No recipe found with this id' });
            return;
        }

        res.status(200).json(recipeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Export router
module.exports = router;