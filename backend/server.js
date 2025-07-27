import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import productRoutes from './routes/productRoute.js'
import cors from 'cors'

dotenv.config();
const PORT=process.env.PORT || 5000;
const app=express();
app.use(express.json()); 

app.use(cors());

app.use('/api/products', productRoutes);

//console.log(process.env.MONGO_URI);

app.listen(PORT,()=>{
    connectDB();
    console.log("Server started at http://localhost:"+PORT);
});


//oRioAu0UL9sXC729