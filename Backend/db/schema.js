// backend/db.js
const mongoose = require('mongoose');

// Create a Schema for Users

mongoose.connect("mongodb+srv://20106114:20106114@paytmwallet.5urc5bk.mongodb.net/paytm")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});



const User = mongoose.model('User', userSchema);

const Account = mongoose.model('Account', accountSchema);

module.exports = {
	Account,
    User
}





