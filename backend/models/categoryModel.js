import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: {
      urls: [String], 
      details: [
        {
          name: String,
          price: Number,
        },
      ],
    },
  },
  { timestamps: true }
);
export default mongoose.model("Category", categorySchema);
