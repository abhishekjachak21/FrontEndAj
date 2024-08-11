const express = require('express');
const cors = require('cors'); // Import cors
const mongoose = require('mongoose');
const connectDB = require('./db');
const User = require('./models/User');
const Account = require('./models/Account');
const Transaction = require('./models/Transaction');

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());

// Connect to MongoDB
connectDB();

// Create a new user
app.post('/createUser', async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = new User({ name, email });
        await user.save();
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get account details
app.get('/getAccount/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const accounts = await Account.find({ user_id: userId });
        res.json(accounts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Deposit into an account

// Deposit into an account
app.post('/deposit', async (req, res) => {
    const { accountId, amount } = req.body;

    // Check if accountId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(accountId)) {
        return res.status(400).json({ error: 'Invalid Account ID' });
    }

    try {
        const account = await Account.findById(accountId);
        if (!account) return res.status(404).json({ error: 'Account not found' });

        account.balance += amount;
        await account.save();

        const transaction = new Transaction({ account_id: accountId, amount, transaction_type: 'deposit' });
        await transaction.save();

        res.json(transaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Withdraw from an account
app.post('/withdraw', async (req, res) => {
    const { accountId, amount } = req.body;

    // Check if accountId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(accountId)) {
        return res.status(400).json({ error: 'Invalid Account ID' });
    }

    try {
        const account = await Account.findById(accountId);
        if (!account) return res.status(404).json({ error: 'Account not found' });
        if (account.balance < amount) return res.status(400).json({ error: 'Insufficient funds' });

        account.balance -= amount;
        await account.save();

        const transaction = new Transaction({ account_id: accountId, amount, transaction_type: 'withdrawal' });
        await transaction.save();

        res.json(transaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
