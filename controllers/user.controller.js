const { request, response } = require('express');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../models/user.model');

const userGet = (req = request, res = response) => {
    const { name, age } = req.query;

    res.json({
        msg: 'get API -- from controller',
        name,
        age,
    });
};

const userPost = async (req, res = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    // Verify if email exists
    const existsEmail = await User.findOne({ email });
    if (existsEmail) {
        return res.status(400).json({
            msg: 'Email already exists',
        });
    }

    // Encrypt password
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt);

    // Save into DB

    await user.save();

    res.json({
        msg: 'post API -- from controller',
        user,
    });
};

const userPut = (req, res = response) => {
    const { userId } = req.params;

    res.json({
        msg: 'put API -- from controller',
        userId,
    });
};

const userPatch = (req, res = response) => {
    res.json('patch API -- from controller');
};

const userDelete = (req, res = response) => {
    res.json('delete API -- from controller');
};

module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete,
};
