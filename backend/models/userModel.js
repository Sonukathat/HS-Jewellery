import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    }
});

const User = mongoose.model("loginUsers",userSchema);

export default User;