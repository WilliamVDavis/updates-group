const express = require("express");
const router = express.Router();

// User Model
const User = require("../../models/User");


// @route   GET api/users
// @desc    GET All users
// @access  Public
router.get("/", (req, res) => {
    User.find()
        .then(Users => res.json(Users))
});

// @route   POST api/users
// @desc    POST new user
// @access  Public
router.post("/", (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,

        
    });

    newUser.save().then(item => res.json(item));
    
});

// @route   DELETE api/user/:id
// @desc    DELETE a user
// @access  Public
router.delete("/:id", (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({ success: false}))
    
});

module.exports = router;