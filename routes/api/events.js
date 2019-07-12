// const express = require("express");
// const router = express.Router();

// // User Model
// const User = require("../../models/Event");


// // @route   GET api/users
// // @desc    GET All users
// // @access  Public
// router.get("/", (req, res) => {
//     Event.find()
//         .then(events => res.json(events))
// });

// // @route   POST api/users
// // @desc    POST new user
// // @access  Public
// router.post("/", (req, res) => {
//     console.log(req.body.eventName);
//     const newEvent = new Event({
//         eventName: req.body.eventName,
//         eventDate: req.body.eventDate,
//         eventTime: req.body.eventTime,
//         eventStreetAddress: req.body.eventStreetAddress,
//         eventCity: req.body.eventCity,
//         eventState: req.body.eventState,
//         eventZipCode: req.body.eventZipCode,
        
//     });

//     newEvent.save().then(item => res.json(item));
    
// });

// // @route   DELETE api/user/:id
// // @desc    DELETE a user
// // @access  Public
// router.delete("/:id", (req, res) => {
//     Event.findById(req.params.id)
//         .then(event => event.remove().then(() => res.json({success: true})))
//         .catch(err => res.status(404).json({ success: false}))
    
// });

// module.exports = router;


const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Event');

// @route   GET api/items
// @desc    GET All Items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
   const newItem = new Item({
       name: req.body.name
   });

   newItem.save().then(item => res.json(item));
});

// @route  DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({ success: false }));
 }); 

module.exports = router;