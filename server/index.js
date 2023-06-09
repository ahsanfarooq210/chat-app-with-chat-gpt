import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import {Configuration,OpenAIApi} from 'openai'
import helmet from "helmet";
import morgan from "morgan";
import openaiRoutes from './routes/openai_routes.js'

// configurations
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

// open ai setup
const configuration= new Configuration({
    apiKey:process.env.OPEN_API_KEY
})
export const openAi=new OpenAIApi(configuration)

// Routes
app.use('/openai',openaiRoutes)

// server setup
const PORT = process.env.PORT||9000;
app.listen(PORT,()=>{
    console.log(`example app listening at http : //localhost:${PORT}`)
})