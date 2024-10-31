const mongoose = require("mongoose")

const connectDB = async () =>{
    try {
        const mongoURI = 'mongodb://localhost:27017/bancomongo'
    await mongoose.connect(mongoURI);

    console.log('MongoDB conectado!');
    } catch (error) {
        console.error('Erro ao conectar o Mongo: ', error);
        process.exit(1);
    }
}
module.exports = connectDB;