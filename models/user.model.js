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

module.exports = model('User', UserSchema);
