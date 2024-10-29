const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is mandatory'],
    },
    email: {
        type: String,
        required: [true, 'Email is mandatory'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is mandatory'],
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        enum: ['USER_ROLE', 'ADMIN_ROLE'],
    },
    status: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    },
});

UserSchema.methods.toJSON = function () {
    // eslint-disable-next-line no-unused-vars
    const { __v, password, ...user } = this.toObject();
    return user;
};

module.exports = model('User', UserSchema);
