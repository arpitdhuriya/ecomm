const mongooes = require('mongoose')
const categorySchema = new mongooes.Schema({
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    parentId: { type: String }
}, { timestamps: true });
module.exports = mongooes.model('Category', categorySchema);