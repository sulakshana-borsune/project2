// const router = require('express').Router()
// const { User, Recipe, RecipeCreator, Region } = require("../models")

// // Get all RecipeCreators
// router.get('/recipeCreators', (req, res) => Recipe.findAll({ include: [Recipe, Region, User] })
//   .then(users => res.json(users))
//   .catch(e => console.error(e)))

// // Get one RecipeCreator
// router.get('/recipeCreators/:id', (req, res) => Recipe.findOne({ where: { id: req.params.id } })
//   .then(user => res.json(user))
//   .catch(e => console.error(e)))

// // Create new RecipeCreator
// router.post('/recipeCreators', (req, res) => RecipeCreator.create(req.body)
//   .then(() => res.sendStatus(200)
//   .catch(e => console.error(e))))

// router.delete('/recipes/:title', (req, res) => Recipe.destroy({ where: { title: req.params.title } })
//   .then(user => res.json(user))
//   .catch(e => console.error(e)))

// module.exports = router