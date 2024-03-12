const router = require('express').Router();
const { User, Recipe} = require('../models');
const withAuth = require('../utils/auth');

// landing/login page
router.get('/', (req, res) => {
    // If a session exists, redirect to the profile page
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('login');
});
  
  
//one recipe detail page 
//router.get('/recipe/:id', async (req, res) => { ///!!!!!!!!!!!!use for testing in Insomnia withoutAuth
router.get('/recipe/:id', withAuth, async (req, res) => {     //removing withAuth for testing. Add back later!
try {
    const recipeID = req.params.id;
    const recipeData = await Post.findByPk(recipeID, {
    include: [
        {
        model: Comment,
        attributes: ['id', 'contents', 'created_by', 'created_at'], // Include necessary attributes of Comment
        include: [
            {
                model: User,
                attributes: ['name'], // Include the 'name' field from the 'Users' table
            },
        ],
        },
        {
            model: User,
            attributes: ['name'], // Include the 'name' field from the 'Users' table
        },
    ],
    });    
    
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
//router.get('/dashboard', async (req, res) => {    ///!!!!!!!!!!!!use for testing in Insomnia withoutAuth
router.get('/dashboard', withAuth, async (req, res) => { 
const userPosts = await Post.findAll({
    include: [
        {
        model: User,
        attributes: ['name'],
        },
    ],
    where: {
        created_by: req.session.user_id,   //comment out for testing in insomnia !!!!!!!!!!!
        // created_by: req.body.created_by   //uncomment for testing in insomnia !!!!!
    }
    });

const recipes = userPosts.map((recipe) => recipe.get({ plain: true }));
res.render('dashboard', { recipes, logged_in: req.session.logged_in });


});




module.exports = router;