const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var enqSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Da gui",
    enum: ["Da gui", "Da lien he", "Trong tien trinh"],
  },
});

//Export the model
module.exports = mongoose.model("Enquiry", enqSchema);
