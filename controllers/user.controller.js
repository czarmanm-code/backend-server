const { request, response } = require('express');
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
    const body = req.body;
    const user = new User(body);

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
