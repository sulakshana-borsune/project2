const router = require('express').Router()
const Region = require('../models/region.js')

// GET all regionss
router.get('/regions', (req, res) => {
  //console.log('region');
  Region.findAll()
    .then(regions => res.json(regions))
    .catch(e => console.error(e))
})

// POST a region
router.post('/regions', (req, res) => {
    Region.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })
  
// PUT a region
router.put('/regions/:id', (req, res) => {
  Region.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})
// DELETE a Region
router.delete('/regionss/:id', (req, res) => {
  Region.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})
  
  
module.exports = router