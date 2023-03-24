const db = require("../config");

const {hash, compare, hashSync} = require("bcrypt");

const {constructToken} = require("../middleware/AuthenticatedUser");

// =============================User Class======================================

class User{
    login(req, res) {
        const {emailAdd, userPass} = req.body;
        const strQry =
        `
        SELECT DEFAULT, firstName, lastName, genDer, cellNumb, emailAdd, userPass, userRole, userProf, regDate
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `;

        db.query(strQry, async(err, data)=> {
            if(err) throw err;
            if((!data) || (data == null)) {
                res.status(401).json({err: "Error inflicted."})
            }else{
                await compare(userPass, data[0].userPass, (cErr, cData)=> {
                    if(cErr) throw cErr;

                    const jwToken = constructToken({
                        emailAdd, userPass
                    });

                    res.cookie("User confirmed.", jwToken, {
                        maxAge: 3600000,
                        httpOnly: true
                    })
                    if(cResult) {
                        res.status(200).json({
                            msg: "Enjoy your shopping.",
                            jwToken,
                            result: data[0]
                        })
                    }else{
                        res.status(401).json({
                            err: "Information submitted is invalid."
                        })
                    }
                })
            }
        })
    }
    fetchUsers(req, res) {
        const strQry = 
        `
        SELECT userID, firstName, lastName, genDer, cellNumb, emailAdd, userRole, userProf, regDate
        FROM Users;
        `;

        db.query(strQry, (err, data)=> {
            if(err) throw err;
            else res.status(200).json({results:data})
        })
    }
    fetchUser(req, res) {
        const strQry = 
        `
        SELECT userID, firstName, lastName , genDer, cellNumb, emailAdd, userRole , userProf, regDate
        FROM Users
        WHERE userID = ?;
        `
        db.query(strQry,[req.params.id], (err, data)=> {
            if(err) throw err;
            else res.status(200).json({results:data})
        })
    }
    async addUser(req, res) {
        const feature = req.body;
        
        feature.userPass = await hash(feature.userPass, 15);
        
        const user = {
            emailAdd: feature.emailAdd,
            userPass: feature.userPass
        }
        
        const strQry =
        `INSERT INTO Users
        SET ?;
        `;

        db.query (strQry, [feature], (err)=> {
            if(err) {
                console.log(err)
                res.status(401).json({err}), console.log(err);
            }else {
                
                const jwToken = constructToken(user);
                
                res.cookie("Valid user!", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });

                res.status(200).json({msg: "New user was added to database."})
            }
        })    
    }

    updateUser(req, res) {
        const info = req.body;
        if(info.userPass !== null || 
            info.userPass !== undefined)
            info.userPass = hashSync(info.userPass, 15);
        const strQry = 
        `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
        
        db.query(strQry,[info, req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A record was updated."} );
        })  
    }
    removeUser(req, res) {
        const strQry = 
        `
        DELETE FROM Users
        WHERE userID = ?;
        `;
        
        db.query(strQry,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A record was removed from the database."} );
        })    
    }
}

// =================================Products Class============================

class Product {
    fetchProducts(req, res) {

        const strQry = `SELECT prodID, prodName, prodDes, cateGory, price, prodQuantity, imgURL
        FROM Products;`;

        db.query(strQry, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchProduct(req, res) {
        const strQry = `SELECT prodID, prodName, prodDes, cateGory, price, prodQuantity, imgURL
        FROM Products
        WHERE prodID = ?;`;
        db.query(strQry, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    addProduct(req, res) {
        const strQry = 
        `
        INSERT INTO Products
        SET ?;
        `;
        db.query(strQry,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "There was trouble adding a product."});
                }else {
                    res.status(200).json({msg: "New product was added."});
                }
            }
        );    

    }
    updateProd(req, res) {
        const strQry = 
        `
        UPDATE Products
        SET ?
        WHERE prodID = ?
        `;
        db.query(strQry,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "There was trouble improving the product."});
                }else {
                    res.status(200).json({msg: "A product was updated."});
                }
            }
        );    

    }
    removeProduct(req, res) {
        const strQry = 
        `
        DELETE FROM Products
        WHERE prodID = ?;
        `;
        db.query(strQry,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "Data was not found in the records."});
            res.status(200).json({msg: "A product was removed."});
        })
    }
}

// =============================Cart Class===============================================

class Cart {
    fetchProduct(req, res) {
        const strQry = `SELECT prodID, prodName, prodDes, cateGory, price, prodQuantity, imgURL
        FROM Products
        WHERE prodID = ?;`;
        db.query(strQry, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    addProduct(req, res) {
        const strQry = 
        `
        INSERT INTO Products
        SET ?;
        `;
        db.query(strQry,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "There was trouble adding a product."});
                }else {
                    res.status(200).json({msg: "New product was added."});
                }
            }
        );    

    }
    updateProd(req, res) {
        const strQry = 
        `
        UPDATE Products
        SET ?
        WHERE prodID = ?
        `;
        db.query(strQry,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "There was trouble improving the product."});
                }else {
                    res.status(200).json({msg: "A product was updated."});
                }
            }
        );   
    }
    removeProduct(req, res) {
        const strQry = 
        `
        DELETE FROM Products
        WHERE prodID = ?;
        `;
        db.query(strQry,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "Data was not found in the records."});
            res.status(200).json({msg: "A product was removed."});
        })
    }
}

module.exports = {
    User, 
    Product,
    Cart
}