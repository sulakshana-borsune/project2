const router = require('express').Router()
const { User, Recipe, Region } = require('../models')
// var passport = require("../config/passport");

// Get all Users with Recipes included
router.get('/users', (req, res) => User.findAll({ include: [Recipe]})
  .then(users => res.json (users))
  .catch(e => console.error (e)))

// Get one User
router.get('/users/:email', (req, res) => User.findOne({ where: { email: req.params.email}, include: [Recipe]})
  .then(user => res.json(user))
  .catch(e => console.error(e)))

// Create new User
router.post('/users', (req, res) => User.create(req.body)
  .then(() => res.sendStatus(200)
  .catch(e => console.error(e))))

// // Passport not working
// router.post("/api/login", passport.authenticate("local"), function (req, res) {
//   res.json(req.user);
// })

// not working right now
// router.put('/users/:username', (req, res) => User.update({where: { username: req.params.username}})
//   .then(user => res.sendStatus(200)
//   .catch(e => console.error(e))))

module.exports = router