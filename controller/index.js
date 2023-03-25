const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

const route = express.Router();

const {User, Product} = require("../model");

const user = new User();

const product = new Product();

route.get("^/$|/Eternal_Caskets", (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, "../view/index.html"))
});

// =========================================Users Route===============================================

route.get("/users", (req, res)=> {
    user.fetchUsers(req, res);
});

route.get("/users/:id", (req, res)=> {
    user.fetchUser(req, res);
});

route.post("/register", bodyParser.json(), (req, res)=> {
    user.addUser(req, res);
});

route.put("/users/:id", bodyParser.json(), (req, res)=> {
    user.updateUser(req, res);
});

route.delete("/users/:id", (req, res)=> {
    user.removeUser(req, res);
});

route.post("/login", (req, res)=> {
    user.login(req, res);
});

// =========================================Products Route===============================================

route.get("/products", (req, res)=> {
    product.fetchProducts(req, res);
});

route.get("/products/:id", (req, res)=> {
    product.fetchProduct(req, res);
});

route.post("/products", bodyParser.json(), (req, res)=> {
    product.addProduct(req, res);
});

route.put("/products/:id", bodyParser.json(), (req, res)=> {
    product.updateProd(req, res);
});

route.delete("/products/:id", (req, res)=>{
    product.removeProduct(req, res);
});

// ============================================Cart Route================================================

route.get("/cart/:id", (req, res)=> {
    cart.fetchCart(req, res);
});

route.post("/cart", bodyParser.json(), (req, res)=> {
    cart.addToCart(req, res);
});

route.put("/cart/:id", bodyParser.json(), (req, res)=> {
    cart.updateCart(req, res);
});

route.delete("/cart/:id", (req, res)=>{
    cart.removeCart(req, res);
});

module.exports = route;