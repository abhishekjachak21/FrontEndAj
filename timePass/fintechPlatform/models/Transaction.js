const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    account_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
    amount: { type: Number, required: true },
    transaction_type: { type: String, enum: ['deposit', 'withdrawal'], required: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
