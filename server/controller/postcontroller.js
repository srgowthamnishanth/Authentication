const jwt = require('jsonwebtoken');

const usermodel = require('../model/usermodel');
const users = require('../schema/userSchema');


module.exports = {
    getpost: (req,res) => {
        
        const data = {
            username: req.body.username,
            password: req.body.password
        }
        
        usermodel.saveUser(data).then((data) => {
            res.send(data);
        }).catch((err) =>  {
           res.send(err)
        })

        var token = jwt.sign({ id: users._id }, 'abc123');
        // res.status(200).send({ auth: true, token: token });

    },

    authuser: (req, res) => {
        const userdata = {
            username: req.body.username,
            password: req.body.password
        }
        
        usermodel.verifyUser(userdata).then((userdata) => {
           
            return res.send(userdata);
        }).catch((err) => {
            return res.send(err);
        });

        var token = jwt.sign({id: users._id }, 'abc123');
        // res.status(200).send({auth: true, token: token});
        

    },

    verification: (req, res, next) => {
  
            const bearerHeader = req.headers['authorization'];

            if(typeof bearerHeader !== 'undefined') {
        
                const bearer = bearerHeader.split(' ');
        
                const bearerToken = bearer[1];
         
                req.token = bearerToken;
            }           

                usermodel.verifyToken(req.token).then((token) => {
                    
                    return res.send(token)
                }).catch((err) => {
                    return res.send(err);
                });
                
        }
    
}