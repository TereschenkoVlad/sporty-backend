import dotenv from 'dotenv';

dotenv.config();

export default {
    app: {
        port: process.env.PORT || '8080'
    },
    mongo: {
        host: process.env.MONGO_HOST || 'mongodb://username:pass@mongodb:27017/'
    }
}
