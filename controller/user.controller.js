const { response } = require('express')

const userGet = (req, res = response) => {
    res.json('get API -- from controller')
}

const userPost = (req, res) => {
    res.json('post API -- from controller')
}

const userPut = (req, res) => {
    res.json('put API -- from controller')
}

const userPatch = (req, res) => {
    res.json('patch API -- from controller')
}

const userDelete = (req, res) => {
    res.json('delete API -- from controller')
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete,
}
