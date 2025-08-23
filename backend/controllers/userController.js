import bcrypt from 'bcrypt'
import User from "../models/userModel.js";

export const createUser = async (req,res)=>{
    try {
        const {name,email,password,isAdmin} = req.body;
        if(!name || !email || !password || !isAdmin){
            return res.status(400).json({
                success:false,
                message:"Name and Age are required"
            })
        }
        
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(password,saltRound);

        const newUser = new User({name,email,password:hashedPassword,isAdmin});
        await newUser.save();

        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const loginUser = async(req,res)=>{
    try {
        const {email,password} = req.body;

        const user = await User.findOne({email})

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({
                success:false,
                message:"Invalid password"
            })
        }

        res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// export const login = async(req,res)=>{
//     try {
//         const {name} = req.body;
//         const foundUser = await User.findOne({name});
//         if(!foundUser){
//             return res.status(400).json({
//                 success:false,
//                 message:"user not found"
//             })
//         }

//         res.status(200).json({
//             success:true,
//             user:foundUser
//         })
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// }