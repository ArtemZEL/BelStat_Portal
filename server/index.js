import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';


//Rotes
const app=express();



//Middlewate
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors())
dotenv.config()

mongoose.connect(process.env.MONGODBCON,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(process.env.PORT,()=>console.log(`Listening to ${process.env.PORT}`)))
.catch((error)=>console.log("Error Connect"))
//usage of routes
app.use('/auth',AuthRoute);
app.use('/user',UserRoute)
app.use('/post',PostRoute)
