const mongoose=require("mongoose");
const Email= require('mongoose-type-email')


const Author= new mongoose.Schema({
    
    fname: {
        type:String,
        required: "First Name is required",
        trim: true
    }, 
    lname: {
        type: String,
        required: "Last name is required",
        trim: true
    },
    title:  {
        type:String,
        enum: ["Mr", "Mrs", "Miss"],
        required:"Title is required",
    },                                        
    email:  {
        type: Email,
        required: "Email is required",
        unique: true,
        lowercase: true,
        trim: true
    },
                                           
    password:{
        type: String,
        required: "password is mandatory",
        trim: true
    }
},{timestamps:true});

module.exports=mongoose.model("author",Author)


