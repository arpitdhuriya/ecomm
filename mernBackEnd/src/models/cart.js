const mongooes = require('mongoose')
const cartSchema = new mongooes.Schema({
   
    user : {type:mongooes.Schema.Types.ObjectId,ref: 'User',required:true},
    cartItems :[
        {
            productId: {type: mongooes.Schema.Types.ObjectId ,ref: 'Product',required:true},
            quantity: {type:Number,default:1},
            price:{type: Number , required:true}
        }
    ]

}, { timestamps: true });
module.exports = mongooes.model('Cart', cartSchema);