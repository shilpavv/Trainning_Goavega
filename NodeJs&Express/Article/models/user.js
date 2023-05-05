const mongoose=require("mongoose")

//user Schema

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

})
const model = mongoose.model('User',UserSchema)
module.exports = model;