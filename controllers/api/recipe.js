const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');


// CREATE new recipe
//router.post('/', withAuth, async (req, res) => {    // !!!!! comment this out for testing in Insomnia
router.post('/', async (req, res) => {   // !!!! uncomment this out for testing in Insomni
    console.log(req);
    try {
        const newRecipe = await Recipe.create({
            title: req.body.title,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            //user_id: req.session.user_id,   // !!!!! comment this out for testing in Insomnia
            user_id: req.body.user_id,       // !!!! uncomment this out for testing in Insomnia

        });
        res.status(201).json(newRecipe);
    } catch (err) {
        console.log(err);
    }
});

// Export router
module.exports = router;