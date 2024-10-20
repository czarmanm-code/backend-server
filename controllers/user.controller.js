const { response } = require('express');

const userGet = (req, res = response) => {
    res.json('get API -- from controller');
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
    res.json('put API -- from controller');
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
