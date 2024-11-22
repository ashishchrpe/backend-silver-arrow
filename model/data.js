let mongoose= require("mongoose");

let Schema= mongoose.Schema;

let Data= Schema ({
        productName:String,
        brand: String,
        color: String,
        price: Number,
        rating: Number,
        category: String,
        imageUrl:String,
});
let DataModel = mongoose.model("data",Data);

module.exports= DataModel;

