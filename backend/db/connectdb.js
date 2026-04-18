const mongoose = require("mongoose");
const connectdb = async()=>{
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log(db.connection.readyState);
        console.log("Database is connected successfully");
    } catch (error) {
        console.log("error during connecting database",error.message);
        process.exit(1)   
    }
}

module.exports = connectdb;