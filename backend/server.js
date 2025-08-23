import express from 'express';
import 'dotenv/config'

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen(port,()=>{
    console.log(`server running on ${port}`);
    
})