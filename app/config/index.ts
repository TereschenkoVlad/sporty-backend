import dotenv from 'dotenv';

dotenv.config();

module.exports = {
    app: {
        port: process.env.PORT || '8080'
    }
}
