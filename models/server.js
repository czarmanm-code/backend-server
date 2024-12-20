const express = require('express');
const cors = require('cors');
const { dBConnection } = require('../database/config.database');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';

        // DB Connection
        this.dBConnection();

        // Middlewares
        this.middlewares();

        // App routes

        this.routes();
    }

    async dBConnection() {
        await dBConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // Body reading and parsing
        this.app.use(express.json());
        // Public directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.userPath, require('../routes/user.routes'));
    }

    listener() {
        this.app.listen(this.port, () => {
            console.log('server running on port', this.port);
        });
    }
}

module.exports = Server;
