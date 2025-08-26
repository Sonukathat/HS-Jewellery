import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const saveProduct = await product.save();
        res.status(200).json({ success: true, saveProduct });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getProduct = async (req,res)=>{
    try {
        const products = await Product.find();

        if(products.length===0){
            return res.status(404).json({success:false,message:"NO product found"})
        }
        res.status(200).json({success:true,products})
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

export const getProductbyid = async (req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);

        if(!product){
            return res.status(404).json({success:false,message:"product not found"})
        }
        res.status(200).json({success:true,product})
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

export const updateProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        const updated = await Product.findByIdAndUpdate(id,req.body);

        if(!updated){
            return res.status(400).json({message:"Product not found"})
        }

        res.status(200).json({success:true,message:"product updated success"})

    } catch (error) {
         res.status(500).json({error:error.message});
    }
}

export const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        const deleted = await Product.findByIdAndDelete(id);

        if(!deleted){
            return res.status(404).json({success:false,message:"product not found"});
        }

        res.status(200).json({success:true,message:"product deleted"})
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}