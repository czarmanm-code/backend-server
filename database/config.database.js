const mongoose = require('mongoose');

const dBConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONN_STRING);
        console.log('Successfully connected to DB');
    } catch (error) {
        console.log(error);
        throw new Error('Error connection to DB');
    }
};

module.exports = { dBConnection };
