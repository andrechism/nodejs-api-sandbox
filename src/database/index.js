const mongoose = require('mongoose');
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

exports.connect = () => {
  mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }).then(() => console.log('DB has been connected successfully!'));
}

