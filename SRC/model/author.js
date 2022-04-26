const mongoose=require("mongoose")
require('mongoose-type-email');


const Author= new mongoose.Schema({
    fname: {
        type:String,
        required: true
    }, 
    lname: {
        type: String,
        required: true
    },
    title:  {                                       //{mandatory, enum[Mr, Mrs, Miss]},
        type:String,
        enum: ["Mr", "Mrs", "Miss"],
        required:true
    },                                        
    email:{
        type: mongoose.SchemaTypes.Email, 
        required: true,
        unique: true
    },                                       
    password:{
        type: Number,
        required: true
    }
},{timestamps:true})

module.exports=mongoose.model("author",Author)