import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @desc    create new Order
// @route   GET /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && itemsPrice.length === 0) {
    res.status(400);
    throw new Error("No Order Item");
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    });

    const createOrder = await Order.save();
    res.status(201).json(createOrder);
  }
});

export { addOrderItems };
