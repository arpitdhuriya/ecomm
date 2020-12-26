const Cart = require('../models/cart')

exports.addItemToCart = (req, res) => {
    Cart.findOne({ user: req.user._id })
        .exec((error, cart) => {
            if (error) return res.status(400).json({ error });
            if (cart) {
                //update the cart by quantity
            
                const product = req.body.cartItems.productId;
                const item = cart.cartItems.find(c => c.productId == product);
                console.log(item)
                if (item) {
                    
                    Cart.findOneAndUpdate({ "user": req.user._id, "cartItems.productID": product }, {
                        "$set": {
                            "cartItems": {
                                ...req.body.cartItems,
                                quantity: item.quantity + req.body.cartItems.quantity
                            }
                        }
                    }).exec((error, _cart) => {
                      
                        if (error) return res.status(400).json({ error });
                        if (_cart) { 
                        return res.status(201).json({ cart: _cart }); }

                    })
                }

            else {
                //
                Cart.findOneAndUpdate({ user: req.user._id }, {
                    "$push": {
                        "cartItems": req.body.cartItems
                    }
                }).exec((error, _cart) => {

                    if (error) return res.status(400).json({ error });
                    if (_cart) {return  res.status(201).json({ cart: _cart }); }

                })
            }
        }
        else {
                const cart = new Cart({
                    user: req.user._id,
                    cartItems: [req.body.cartItems]

                });
                cart.save((error, cart) => {
                    if (error) return res.status(400).json({ error });
                    if (cart) {
                        return res.status(200).json({ cart });
                    }
                });
            }
    });
    
};