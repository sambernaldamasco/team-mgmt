//==========================
// DEPENDENCIES
//==========================
// -- express server
const express = require('express')

//-- adding the router
const router = express.Router()

// -- db collection
const Skater = require('../models/skaters.js')


//=====================
//  ROUTES
//=====================
// ============== GET ROUTES ==============
// -- index route redirects to skaters index page
router.get('/', (req, res) => {
  Skater.find({}, (error, query) => {
    res.render('skaters/index.ejs',
    {
      skaters: query
    })

  })
})

// ================== edit routes
// -- edit agility
router.get('/:id/agility', (req, res) => {
  Skater.findById(req.params.id, (error, foundSkater) => {
    res.render('skaters/skills/agility.ejs',
    {
      skater: foundSkater
    })
  })
})

// -- edit fitness
router.get('/:id/fitness', (req, res) => {
  Skater.findById(req.params.id, (error, foundSkater) => {
    res.render('skaters/skills/fitness.ejs',
    {
      skater: foundSkater
    })
  })
})


// -- edit teamwork
router.get('/:id/teamwork', (req, res) => {
  Skater.findById(req.params.id, (error, foundSkater) => {
    res.render('skaters/skills/teamwork.ejs',
    {
      skater: foundSkater
    })
  })
})

// -- edit coachability
router.get('/:id/coachability', (req, res) => {
  Skater.findById(req.params.id, (error, foundSkater) => {
    res.render('skaters/skills/coachability.ejs',
    {
      skater: foundSkater
    })
  })
})




// ============== PUT ROUTES ==============
// -- UPDATE(put) ROUTE
// adding data from the EDIT route
// -- put route for agility
router.put('/:id/agility', (req, res) => {
  Skater.findByIdAndUpdate(req.params.id, {$set: {'skills.agility':req.body} }, {new:true}, (error, updatedData) => {
    res.send(updatedData)
  })
})


// -- put route for fitness
router.put('/:id/fitness', (req, res) => {
  Skater.findByIdAndUpdate(req.params.id,{$set: {'skills.fitness':req.body} }, {new:true}, (error, updatedData) => {
    res.send(updatedData)
  })
})


// -- put route for teamwork
router.put('/:id/teamwork', (req, res) => {
  Skater.findByIdAndUpdate(req.params.id,{$set: {'skills.teamwork':req.body} }, {new:true}, (error, updatedData) => {
    res.send(updatedData)
  })
})

// -- put route for coachability
router.put('/:id/coachability', (req, res) => {
  Skater.findByIdAndUpdate(req.params.id,{$set: {'skills.coachability':req.body} }, {new:true}, (error, updatedData) => {
    res.send(updatedData)
  })
})


module.exports = router