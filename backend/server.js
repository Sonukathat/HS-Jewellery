import express from 'express';
import connectDB from './config/db.js';
import 'dotenv/config'
import userRoutes from './routes/userRoutes.js'

connectDB();
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/users',userRoutes);

app.listen(port,()=>{
    console.log(`server running on ${port}`);
    
})