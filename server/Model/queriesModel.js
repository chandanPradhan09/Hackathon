const mongoose=require('mongoose')


//schema for database
const querySchema=new mongoose.Schema({

    query:{
        type:String,
        required:[true,"query required"],
    },
    answer:{
        type:String,
    },
    email:{
        type:String,
    }
})

const queryModel=mongoose.model("query",querySchema);
module.exports=queryModel;