const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connect = () => {
    return mongoose.connect("mongodb+srv://mayankrj1224:rajmayank24@cluster0.kohfntv.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = connect;