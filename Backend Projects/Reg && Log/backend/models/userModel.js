const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ['Admin', 'User'], default: 'User'
    }
},
{
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User