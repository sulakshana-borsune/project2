const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./recipeRoutes.js'))
// router.use('/api', require('./recipeCreatorRoutes.js'))

router.use('/api', require('./regionRoutes.js'))

router.use(require('./htmlRoutes.js'))

module.exports = router