const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        count: Number,
        color: String,
      },
    ],
    paymentIntent: {},
    orderStatus: {
      type: String,
      default: "Chua duoc xu ly",
      enum: [
        "Chua duoc xu ly",
        "Thanh toan khi nhan hang",
        "Dang xu ly",
        "Dang gui",
        "Da huy",
        "Da nhan hang",
      ],
    },
    orderby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Order", orderSchema);
