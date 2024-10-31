const { request, response } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user.model');

const userGet = async (req = request, res = response) => {
    try {
        // Validate query parameters
        const limit = Math.max(
            1,
            Math.min(parseInt(req.query.limit) || 5, 100)
        ); // Limit to 100
        const from = Math.max(0, parseInt(req.query.from) || 0); // Ensure 'from' is non-negative

        // Fetch users from the database
        const users = await User.find().limit(limit).skip(from);

        // Respond with user data
        res.status(200).json({
            total: await User.countDocuments(), // Total count of users
            limit,
            from,
            count: users.length,
            users,
        });
    } catch (error) {
        // Handle errors
        console.error('Error fetching users:', error);
        res.status(500).json({
            message: 'Internal server error',
        });
    }
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
