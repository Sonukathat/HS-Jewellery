import mongoose from "mongoose";
import Category from "../models/categoryModel.js";


export const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        if (!name || !description || !req.file) {
            return res.status(400).json({ success: false, message: "All fields required" });
        }


        const imagePath = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

        const category = await Category.create({
            name,
            description,
            image: imagePath
        });

        res.status(201).json({
            success: true,
            category
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};



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
        const { name, description } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid id format"
            });
        }

        let updateData = {};
        if (name) updateData.name = name;
        if (description) updateData.description = description;

        
        if (req.file) {
            const imagePath = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
            updateData.image = imagePath;
        }

        const updated = await Category.findByIdAndUpdate(id, updateData, { new: true });

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }

        res.status(200).json({
            success: true,
            updated
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};



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