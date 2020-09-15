const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
        maxlength: 30,
        trim: true,
    },
    price: {
        required: true,
        type: Number,
    },
    description: {
        required: false,
        type: String,
        maxlength: 400,
    },
}, {
    timestamps: true,
});

const Product = mongoose.model("Product", productSchema);