const jwt = require('jsonwebtoken');


var users = require('../schema/userSchema'); 

module.exports = {
    saveUser: (data) => {
        return new Promise((resolve, reject) => {

            var userschema = new users(data); 

            userschema.save().then((d) => {

                resolve(d)

            }).catch((err) => {

                reject(err)

            })
        })
    },

    verifyUser: (userdata) => {
        
        return new Promise((resolve, reject) => {

            users.find({username: userdata.username, password: userdata.password}).then((userdata) => {

                if(userdata.length != 0) {
                    
                    return resolve(userdata)

                }

                return reject('data not found')

            }).catch((err) => {

                reject(err)

            })
        })
    },

    verifyToken: (Header) => {
                
        return new Promise((resolve, reject) => { 

            jwt.verify(Header, 'abc123', (err, token) => {  

                if(!err)
                    return resolve(token);

                return reject("Failed to verify") 
            }); 
        })
    }
        
        



}