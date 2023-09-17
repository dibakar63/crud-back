const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    
    phone:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
        
    }
})

module.exports=mongoose.model("users",userSchema)