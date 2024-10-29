const User = require('../models/user.model');
const Role = require('../models/role.model');

const existsEmail = async (email = '') => {
    const existsEmail = await User.findOne({ email });
    if (existsEmail) {
        throw new Error(`Provided ${email} email already exists in  database.`);
    }
};

const isAValidRole = async (role = '') => {
    const existRole = await Role.findOne({ role });
    if (!existRole) {
        throw new Error(`Provided ${role} role does not exist in database.`);
    }
};

const existsUserById = async (userId) => {
    const existsUser = await User.findById(userId);
    if (!existsUser) {
        throw new Error(`User with ${userId} id does not exists`);
    }
};

module.exports = { isAValidRole, existsEmail, existsUserById };
