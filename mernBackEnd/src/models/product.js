const mongooes = require('mongoose')
const productSchema = new mongooes.Schema({
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    quantity: {type:Number,required:true},
    description: { type: String, trim: true, required: true },
    offers: { type: Number },
    productPictures: [{
        img: { type: String }
    }],
    // Reference the user , review 
    reviews: [{
        userId: {type:mongooes.Schema.Types.ObjectId, ref: 'User'},
        review: String
    }],
    category : {type:mongooes.Schema.Types.ObjectId,ref : 'Category',required:true},
    createdBy :{type:mongooes.Schema.Types.ObjectId, ref: 'User',required:true},
    updatedAt :Date
    

}, { timestamps: true });
module.exports = mongooes.model('Product', productSchema);