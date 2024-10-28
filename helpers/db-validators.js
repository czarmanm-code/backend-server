const User = require('../models/user.model');
const Role = require('../models/role.model');

const existsEmail = async (email = '') => {
    const existEmail = await User.findOne({ email });
    if (existEmail) {
        throw new Error(`Provided ${email} email already exists in  database.`);
    }
};

const isAValidRole = async (role = '') => {
    const existRole = await Role.findOne({ role });
    if (!existRole) {
        throw new Error(`Provided ${role} role does not exist in database.`);
    }
};

module.exports = { isAValidRole, existsEmail };
