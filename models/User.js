const mongoose =require('mongoose')

const Schema =mongoose.Schema;

const userSchema= new Schema({
    email: {
        unique: true,
        type: String
    },
    username: String,
    firstname: String,
    lastname: String,
    password: String
})
const User =mongoose.model('User',userSchema)

module.exports= User;