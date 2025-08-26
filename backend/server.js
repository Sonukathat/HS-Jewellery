import express from 'express';
import connectDB from './config/db.js';
import 'dotenv/config'
import userRoutes from './routes/userRoute.js'
import categoryRoutes from './routes/categoryRoute.js'
import productRoutes from './routes/productRoute.js'

connectDB();
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/users',userRoutes);
app.use('/category',categoryRoutes);
app.use('/product',productRoutes);


app.listen(port,()=>{
    console.log(`server running on ${port}`);
    
})