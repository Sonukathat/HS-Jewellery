import express from 'express';


const app = express();

app.use(express.json());


let port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen(port,()=>{
    console.log(`server running on ${port}`);
    
})