const mongoose = require('mongoose');

// const DB = process.env.DATABASE_URI;
const DB = 'mongodb://localhost:27017/authDb';

mongoose.connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Database connection established...');
    })

    .catch(e => {
        console.log(e);
    })