const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A file must have a name.']
  },
  path: {
    type: String,
    required: [true, 'A file must have a path.'],
    trim: true
  },
  url: {
    type: String,
    required: [true, 'A file must have a URL.']
  }
});

const File = mongoose.model('File', fileSchema);

module.exports = File;