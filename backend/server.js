import express from 'express';
import connectDB from './config/db.js';
import 'dotenv/config'
import userRoutes from './routes/userRoute.js'
import categoryRoutes from './routes/categoryRoute.js'
import productRoutes from './routes/productRoute.js'
import orderRoutes from './routes/orderRoute.js'
import path from 'path';

connectDB();
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use('/users',userRoutes);
app.use('/category',categoryRoutes);
app.use('/product',productRoutes);
app.use('/order',orderRoutes)


app.listen(port,()=>{
    console.log(`server running on ${port}`);
    
})