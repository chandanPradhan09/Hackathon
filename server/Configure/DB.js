const mongoose=require("mongoose");


//connection of database
const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb+srv://iushakg0403:aayush@cluster0.ppglzkp.mongodb.net/')
        console.log("database connected")
    }catch{
        console.log("server issues");
    }
}
module.exports = connectDB;