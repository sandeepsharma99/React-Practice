import mongoose  from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        requied:true,
        unique:true,
    }email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        minimumLength:5,
    }
})