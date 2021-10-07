const mongoose = require("mongoose");
require("dotenv").config();
//const config = require("config");
//const db_dev = config.get('mongoURI');
const db = process.env.MONGODBCONNECTION

const connectDB = async() => {
    try {
        
        await mongoose.connect(
            db,
            {
                useNewUrlParser: true
            }
        );

        console.log('MongoDB is Connected...');
    } catch(err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;