import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.DBURL);
        console.log("MongoDb Connected...");  
    } catch (error) {
        console.log("MongoDb not connected",error);
    }
};

export default connectDB;