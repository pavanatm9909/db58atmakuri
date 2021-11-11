const mongoose = require("mongoose") 
const canteenSchema = mongoose.Schema({ 
    Item_name: String, 
    Item_type: String, 
    Item_price: Number 
}) 
 
module.exports = mongoose.model("canteen", 
canteenSchema) 