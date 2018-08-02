const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    description : {
        type: String,
    },
    price: {
        type: Number,
        default: 0
    },
    count: {
        type: Number,
        default: 0
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;