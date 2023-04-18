import config from "../config";
import * as mongoose from "mongoose";

const connect = () => new Promise((resolve, reject) => {
    const options: { useUnifiedTopology: boolean; useNewUrlParser: boolean } = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    mongoose.connect(config.mongo.host, options as mongoose.ConnectOptions)
        .then(() => {
            console.log('MongoDB has been connected');
            resolve(mongoose)
        })
        .catch(e => reject(e))
})

const disconnect = async () => {
    await mongoose.disconnect();
}

export { connect, disconnect };
