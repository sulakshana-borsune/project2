const path = require('path')
const router = require('express').Router()


router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, ('../public/index.html')))
})

router.get('/allrecipes', function (req, res) {
  res.sendFile(path.join(__dirname, ('../public/allRecipes.html')))
})
 
router.get('/myrecipes', function (req, res) {
  res.sendFile(path.join(__dirname, ('../public/myRecipes.html')))
})

router.get('/createrecipe', function (req, res) {
  res.sendFile(path.join(__dirname, ('../public/createRecipe.html')))
})


router.get('/regionalrecipes', function (req, res) {
  res.sendFile(path.join(__dirname, ('../public/regionalRecipes.html')))
})

router.get('/map', function (req, res) {
  res.sendFile(path.join(__dirname, ('../public/map.html')))
})

router.get('/createregion', function (req, res) {
  res.sendFile(path.join(__dirname, ('../public/createRegion.html')))
})
module.exports = router
