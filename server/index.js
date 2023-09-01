const express=require('express');
const connectDB=require('./Configure/DB');
const cors=require('cors')

const app=express();

//connecting database
connectDB();


//importing controllers
const{
    getqueriesControllers,
    createqueriesControllers
}=require('./Controllers/queriesCtrl');

app.use(express.json())

//creation of routes

app.get('/getqueries',getqueriesControllers);

app.post('/createqueries',createqueriesControllers);

const port=6000;

//connecting to server
app.listen(port,()=>{
    console.log('server is running at port 6000')
})