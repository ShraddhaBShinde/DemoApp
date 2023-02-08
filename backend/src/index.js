const express = require('express');
const env=require('dotenv');
const mongoose= require('mongoose');
const app=express();

const authRoutes=require('./Routes/auth')
const adminRoutes=require('./Routes/adminRoutes/auth')
const categoryRoutes=require("./Routes/Category");
const productRoutes=require("./Routes/Product");
const cartRoutes=require("./Routes/cart");


env.config();
app.use(express.json());


mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.renzgrp.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`).then(()=>{
    console.log("Connected")
});

app.use(authRoutes);
app.use(adminRoutes);
app.use(categoryRoutes);
app.use(productRoutes)
app.use(cartRoutes)




app.listen(process.env.PORT,()=>{
    console.log(`Listening on ${process.env.PORT}`)
});