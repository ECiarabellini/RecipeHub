const router = require('express').Router();
const recipeRoutes = require('./recipes');

router.use('/recipe', recipeRoutes);


module.exports = router;