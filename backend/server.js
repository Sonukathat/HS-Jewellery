import express from 'express';
import connectDB from './config/db.js';
import 'dotenv/config'
import userRoutes from './routes/userRoute.js'
import categoryRoutes from './routes/categoryRoute.js'
import productRoutes from './routes/productRoute.js'
import orderRoutes from './routes/orderRoute.js'
import cors from 'cors'
// import path from 'path';

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API is running..');
});

app.use("/uploads", express.static("uploads"));

app.use('/users',userRoutes);
app.use('/category',categoryRoutes);
app.use('/product',productRoutes);
app.use('/order',orderRoutes)


app.listen(port,()=>{
    console.log(`server running on ${port}`);
    
})