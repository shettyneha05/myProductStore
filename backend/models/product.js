import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
     image:{
        type:String,
        required:true
     }

},{
    timestamps:true  // keeps track of createdAt and updatedAt timings
});

export default mongoose.model("Product", productSchema);
