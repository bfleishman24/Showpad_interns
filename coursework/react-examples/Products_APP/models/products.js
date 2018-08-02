const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
    }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;