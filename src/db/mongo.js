const mongoose = require("mongoose");

const conectMongoDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
}

module.exports = conectMongoDB;