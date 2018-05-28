const usermodel = require('../model/usermodel');

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

    },

    authuser: (req, res) => {
        const userdata = {
            username: req.body.username,
            password: req.body.password
        }
        
        usermodel.verifyUser(userdata).then((userdata) => {
            res.send(userdata);
        }).catch((err) => {
            res.send(err);
        })

    }
}