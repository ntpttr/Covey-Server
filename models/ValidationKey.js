const mongoose = require('mongoose');

/**
 * The schema for a user validation key.
 */
const ValidationKeySchema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
  token: {type: String, required: true},
  createdAt: {type: Date, required: true, default: Date.now, expires: 43200},
});

module.exports = mongoose.model('ValidationKey', ValidationKeySchema);
