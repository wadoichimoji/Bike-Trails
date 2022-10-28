const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('user', userSchema)