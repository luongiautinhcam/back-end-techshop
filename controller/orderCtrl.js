const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

//Lấy thông tin đơn hàng
const getOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getOrder = await Order.findById(id)
      .populate("orderItems.product")
      .populate("orderItems.color")
      .exec();
    res.json(getOrder);
  } catch (error) {
    throw new Error(error);
  }
});

//Cập nhật đơn hàng
const updateOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateOrder = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateOrder);
  } catch (error) {
    throw new Error(error);
  }
});

//Xoá đơn hàng
const deleteOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteOrder = await Order.findByIdAndDelete(id);
    res.json(deleteOrder);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getOrder,
  updateOrder,
  deleteOrder,
};
