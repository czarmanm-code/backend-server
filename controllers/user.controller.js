const { request, response } = require('express');
const bcryptjs = require('bcryptjs');

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
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

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

const userPut = async (req, res = response) => {
    const { userId } = req.params;
    // eslint-disable-next-line no-unused-vars
    const { _id, password, google, email, ...rest } = req.body;

    if (password) {
        // Encrypt password
        const salt = bcryptjs.genSaltSync(10);
        rest.password = bcryptjs.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(userId, rest);

    res.json({
        msg: 'put API -- from controller',
        user,
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
