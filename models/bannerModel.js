const mongoose = require("mongoose");

var bannerSchema = new mongoose.Schema(
  {
    images: [
      {
        public_id: String,
        url: String,
      },
    ],
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Banner", bannerSchema);
