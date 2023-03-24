require("dotenv").config;

const {sign, verify} = require("jsonwebtoken");

function constructToken(user){
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: "1h"
    });
}

function verifyToken(req, res, next) {
    try{
        const token = req.cookies["Registered Consumer"] !== null ? req.cookies["Registered Consumer"]: "New user, please enlist";
        const isConfirmed = null;
        if(token !== "New user, please enlist") {
            isConfirmed = verify(token, process.env.SECRET_KEY);
            if(isConfirmed) {
                req.authenticated = true;
                next();
            }else {
                res.status(400).json({err: "New user, please enlist"})
            }
        }else {
            res.status(400).json({err: "Please enlist as an user"});
        }
    }catch(e) {
        res.status(400).json({err: e.message});
    }
}

module.exports = {constructToken, verifyToken};