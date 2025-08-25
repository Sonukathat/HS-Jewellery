import mongoose from "mongoose";
import Category from "../models/categoryModel.js";

export const createCategory = async (req, res) => {
    try {
        const { name, description, image } = req.body;

        if (!name || !description || !image) {
            return res.status(400).json({
                success: false,
                message: "All field are required"
            })
        }

        const newCategory = new Category({ name, description, image });
        const addCateg = await newCategory.save();

        res.status(200).json({ success: true, addCateg })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getCategory = async (req, res) => {
    try {

        const categories = await Category.find();

        if (categories.length === 0) {
            res.status(400).json({
                success: false,
                message: "category is empty"
            })
        }

        res.status(200).json({
            message: true,
            categories
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        if(!name){
            return res.status(400).json({
                success:false,
                message:"name field is required"
            })
        }

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid id formate"
            })
        }

        const updated = await Category.findByIdAndUpdate(id, { name }, { new: true });

        if (!updated) {
            return res.status(400).json({
                success: false,
                message: "id not found"
            })
        }

        res.status(200).json({
            success: true,
            updated
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteCategory = async (req, res) => {
    const { id } = req.params;

    const deleted = await Category.findByIdAndDelete(id);

    if (!deleted) {
        return res.status(200).json({
            success: true,
            message: "item not found"
        })
    }

    res.status(200).json({
        success: true,
        message: "item deleted"
    })
}