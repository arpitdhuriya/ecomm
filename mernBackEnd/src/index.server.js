const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose'); 

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

//env Config
env.config();

//mondo db connection 
// mongodb+srv://root:<password>@cluster0.o1x56.mongodb.net/<dbname>?retryWrites=true&w=majority
app.use(express.json());
app.use('/api',authRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.o1x56.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify: false
    }
).then(() => console.log('Database Connected'));

app.use('/api',adminRoutes )
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})