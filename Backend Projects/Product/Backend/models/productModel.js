import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: { 
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        }
  },{
    timestamps: true
  });
  
  const Product = mongoose.model('Product', productSchema);
  export default Product;