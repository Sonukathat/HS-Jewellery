import mongoose from "mongoose";
import Category from "../models/categoryModel.js";


export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const itemNames = req.body.itemNames;
    const itemPrices = req.body.itemPrices;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "Images are required" });
    }

    const imageUrls = req.files.map((file) => {
      return `${req.protocol}://${req.get("host")}/uploads/${file.filename}`;
    });

    const details = itemNames.map((n, idx) => ({
      name: n,
      price: Number(itemPrices[idx])
    }));

    const category = new Category({
      name,
      description,
      images: {
        urls: imageUrls,
        details
      },
    });

    await category.save();
    res.status(201).json({ success: true, category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
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
    const { oldName, newName, description } = req.body;
    let itemNames = req.body.itemNames;
    let itemPrices = req.body.itemPrices;

    if (!oldName) {
      return res.status(400).json({ message: "Old name required" });
    }

    // Agar sirf ek hi input aya ho to usko array bana lo
    if (typeof itemNames === "string") itemNames = [itemNames];
    if (typeof itemPrices === "string") itemPrices = [itemPrices];

    // name + price ko pair karo
    const details = itemNames.map((n, idx) => ({
      name: n,
      price: Number(itemPrices[idx]),
    }));

    // Update object
    const updateData = {
      name: newName,
      description,
    };

    // Agar naye images bhi aaye hain
    if (req.files && req.files.length > 0) {
      const imageUrls = req.files.map(
        (f) => `${req.protocol}://${req.get("host")}/uploads/${f.filename}`
      );

      updateData.images = {
        urls: imageUrls,
        details: details,
      };
    } else {
      // Sirf details update karni ho
      updateData["images.details"] = details;
    }

    const updatedCategory = await Category.findOneAndUpdate(
      { name: { $regex: new RegExp(`^${oldName}$`, "i") } },
      { $set: updateData },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      message: "Category updated successfully",
      updatedCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while updating category" });
  }
};





export const deleteCategory = async (req, res) => {
  try {
    const { name } = req.params;

    const deleted = await Category.findOneAndDelete({
      name: { $regex: new RegExp(`^${name}$`, "i") }
    });

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Category not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Category deleted successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error while deleting category"
    });
  }
};
