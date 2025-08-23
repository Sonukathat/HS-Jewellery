import User from "../models/userModel.js";

export const createUser = async (req,res)=>{
    try {
        const {name,age} = req.body;
        if(!name || !age){
            return res.status(400).json({
                success:false,
                message:"Name and Age are required"
            })
        }
        const newUser = new User({name,age});
        await newUser.save();

        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getUsers = async(req,res)=>{
    try {
        const allUsers = await User.find();
        res.status(200).json({
            success:true,
            data:allUsers
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}