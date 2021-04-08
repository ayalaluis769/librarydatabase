const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LibrarySchema = new Schema({
    Book:{
        title:{type:String,required:true},
        published:{type:Date,required:true},
        type:{type:String,required:true}
    }, 
    Author:{
        name:{type:String,required:true},
        gender:{type:String,required:true},
        birth:{type:Date,required:true},
    }, 
    LibraryBranch:{
        city:{type:String,required:true},
        state:{type:String,required:true},
        zipcode:{type:Number,required:true}
    }, 
    Genre:{
        catergory:{type:String,required:true},
        year:{type:Number,required:true}
    }, 
    PublishingCompany:{
        name:{type:String,required:true},
        manager:{type:String,required:true},
        location:{type:Array,required:true}
    } 
})

module.exports = mongoose.model('Library',LibrarySchema)