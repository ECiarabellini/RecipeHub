const router = require('express').Router();
const recipeRoutes = require('./recipeRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/recipe', recipeRoutes);


module.exports = router;