import bcrypt from 'bcrypt'
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";


export const createUser = async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All field are required"
            })
        }

        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(password, saltRound);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            isAdmin: false  
        });
        await newUser.save();

        res.status(201).json({ success: true });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            })
        }

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SECRET
        );

        res.status(200).json({
            success: true,
            token : token,
            user:user
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const getUserprofile = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            success: true,
            data: req.user,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        if (users.length === 0) {
            return res.status(404).json({ message: "Don't have any user" })
        }
        res.status(200).json({ success: true, users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ success: true, message: "User Deleted" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}