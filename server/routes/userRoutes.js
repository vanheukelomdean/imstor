const express = require('express');
    path = require('path');
    cors = require('cors')
    async = require('async');
    
const UserModel = require('../models/userModel.js');

const router = express.Router();


router.get('/getUsers', function (req, res) {
        (async () => {
            const r = await UserModel.find({}, 'email')
            res.send(r);
        })();
});

router.post('/addUser', function (req, res) {
    let new_user = req.query.user;
    (async () => {
        const r = await UserModel.create(new_user, function (err) {
            if (err) 
                res.send(false);
        });

        res.send(true);
    })();
});


router.get('/login', function (req, res) {
    let user_query = {  email: req.query.email,
                        password: req.query.password   };

    // console.log(user_query);
    (async () => {
        const r = await UserModel.find(user_query)

        if (r.length == 1)
            res.send(r[0]);
        else 
            res.send(false);
    })();
});

module.exports = router;