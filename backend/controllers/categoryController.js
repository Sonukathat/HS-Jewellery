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
        await newCategory.save();

        res.status(200).json({ success: true })
    } catch (error) {
         res.status(500).json({message:error.message})
    }
}

export const getCategory = async (req,res) =>{
    try {
        const {name} = req.body;

        if(!name){
            res.status(400).json({
                success:true,
                message:"category name is required"
            })
        }

        const categories = await Category.find({name});

        if(categories.length === 0){
            res.status(400).json({
                success:false,
                message:"NO category found with this name"
            })
        }

        res.status(200).json({
            message:true,
            categories
        });
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}