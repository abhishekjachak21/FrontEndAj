const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    balance: { type: Number, default: 0 },
});

module.exports = mongoose.model('Account', AccountSchema);
