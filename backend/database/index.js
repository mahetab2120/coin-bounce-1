const mongoose = require('mongoose')
const { MONGODB_CONNECTION_STRING } = require('../config/index')

//const connectionString = "mongodb+srv://admin:1234@cluster0.zjshrmx.mongodb.net/coin?retryWrites=true&w=majority"

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_CONNECTION_STRING);
        console.log(`Database connected to host: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

module.exports = dbConnect;