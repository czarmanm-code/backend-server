const { request, response } = require('express');

const userGet = (req = request, res = response) => {
    const { name, age } = req.query;

    res.json({
        msg: 'get API -- from controller',
        name,
        age,
    });
};

const userPost = (req, res = response) => {
    const { name, age } = req.body;

    res.json({
        msg: 'post API -- from controller',
        name,
        age,
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
