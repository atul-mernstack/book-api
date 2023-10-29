const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter book title"]
    }, 
    author:{
        type:String,
        required:[true,"Please enter author name"]
    },
     summary:{
        type:String,
        required:[true,"Please enter book summary"]
     }
});

module.exports=mongoose.model("Book",bookSchema);