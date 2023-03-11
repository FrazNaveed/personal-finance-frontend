const mongoose = require('mongoose');

// Define the schema for a user
const userSchema = new mongoose.Schema({
username: {
type: String,
required: true
},
email: {
type: String,
required: true,
unique: true
},
password: {
type: String,
required: true
}
});

// Define the schema for a monthly expense
const expenseSchema = new mongoose.Schema({
user: {
type: mongoose.Schema.Types.ObjectId,
ref: 'User'
},
month: {
type: Date,
required: true
},
food: {
type: Number,
required: true
},
transport: {
type: Number,
required: true
},
bills: {
type: Number,
required: true
},
totalExpense: {
type: Number,
required: true
}
});

// Create models for the schemas
const User = mongoose.model('User', userSchema);
const Expense = mongoose.model('Expense', expenseSchema);

// Export the models
module.exports = {
User,
Expense
};
