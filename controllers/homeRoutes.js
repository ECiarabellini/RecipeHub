const router = require('express').Router();
const { User, Recipe} = require('../models');
const withAuth = require('../utils/auth');

// landing/login page
router.get('/', (req, res) => {
    // If a session exists, redirect to the profile page
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});


//one recipe detail page 
//router.get('/recipe/:id', async (req, res) => { ///!!!use for testing in Insomnia withoutAuth
router.get('/recipe/:id', withAuth, async (req, res) => {     //removing withAuth for testing. Add back later!
    try {
        const recipeID = req.params.id;
        const recipeData = await Recipe.findByPk(recipeID);    
        
        if (!recipeData) {
        return res.status(404).json('recipeData not found!');
        }
        const recipe = recipeData.get({ plain: true });
        
        // Send over the 'loggedIn' session variable to the 'recipe' template
        res.render('recipe', { recipe, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// dashboard page
router.get('/dashboard', withAuth, async (req, res) => { 
    const userRecipes = await Recipe.findAll({
        where: {
            user_id: req.session.user_id,   //comment out for testing in insomnia !!!
            // user_id: req.body.created_by   //uncomment for testing in insomnia !!!
        }
    });

    const recipes = userRecipes.map((recipe) => recipe.get({ plain: true }));
    res.render('dashboard', { recipes, logged_in: req.session.logged_in });
});


// new recipe page
router.get('/new', withAuth, async (req, res) => { 
    res.render('newRecipe', { logged_in: req.session.logged_in });
});




module.exports = router;