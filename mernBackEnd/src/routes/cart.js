const { requireSignin, userMiddleWare } = require("../common-middleware")

const express = require('express')
const route = express.Router();

const { rawListeners } = require("../models/category");
const {addItemToCart} = require("../controllers/cart");

route.post('/user/cart/addtocart',requireSignin, userMiddleWare, addItemToCart);

module.exports = route;
