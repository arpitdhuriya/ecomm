const { requireSignin, adminMiddleWare } = require("../common-middleware")

const express = require('express')
const route = express.Router();

const { rawListeners } = require("../models/category");
const { addCategory,getCategories} = require("../controllers/category");

route.post('/category/create',requireSignin,adminMiddleWare, addCategory);
route.get('/category/getcategory',getCategories)
module.exports = route;
