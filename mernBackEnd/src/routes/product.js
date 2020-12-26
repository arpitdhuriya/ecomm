const { requireSignin, adminMiddleWare } = require("../common-middleware")
const express = require('express')
const route = express.Router();
const multer = require('multer');
const shortid = require('shortid')
const { createProduct } = require("../controllers/product");
const path = require('path');

//const { addCategory,getCategories} = require("../controllers/category");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  });
  const upload = multer({storage});   
route.post('/product/create',requireSignin,adminMiddleWare,upload.array('productPicture'), createProduct);
//route.get('/product/getproduct',getCategories)
module.exports =route ;
