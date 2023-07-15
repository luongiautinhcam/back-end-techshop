const express = require("express");
const {
  getOrder,
  updateOrder,
  deleteOrder,
} = require("../controller/orderCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/:id", getOrder, isAdmin);
router.put("/:id", authMiddleware, isAdmin, updateOrder);
router.delete("/:id", authMiddleware, isAdmin, deleteOrder);

module.exports = router;
