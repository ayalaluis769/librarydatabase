const { connect, connection } = require('mongoose');
const { config } = require('dotenv');

module.exports = () => {
    config();
    const uri = process.env.MONGO_URI;
    console.log('URI'+uri);

    connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    })
        .then(() =>{
            console.log('Connection established with MongoDB');
        })
        .catch(error => console.error(error.message));
        connection.on('connected', () => {
            console.log('Mongoose connected to DB Cluster');
        })
        connection.on('error', (error) => {
            console.error(error.message);
        })
        connection.on('disconnected', () => {
            console.log('Mongoose Disconnected');
        })
}