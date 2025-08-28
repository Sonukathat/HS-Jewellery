import Order from "../models/orderMOdel.js";

export const createOrder = async (req, res) => {
    try {
        const { orderItems, shippingAddress } = req.body;

        if (!orderItems) {
            return res.status(400).json({ message: "No order items" })
        }

        const order = new Order({orderItems, shippingAddress });

        const createOrder = await order.save();

        res.status(201).json({ success: true, createOrder });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getOrderbyid = async (req,res)=>{
    try {
        const {id} = req.params;

        const orderbyid = await Order.findById(id);
        if(!orderbyid){
            return res.status(404).json({success:false,message:"Order not found"});
        }

        res.status(200).json({success:true,orderbyid});
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const getOrders = async (req,res)=>{
    try {
        const orders = await Order.find();

        if(orders.length===0){
            return res.status(404).json({success:false,message:"Don't have any order"});
        }
        res.status(200).json({success:true,orders});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}