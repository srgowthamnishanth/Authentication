 const postcontroller = require('../controller/postcontroller');

module.exports = (Router) => {
    Router.post('/registeration', postcontroller.getpost);

    Router.post('/login', postcontroller.authuser);

    Router.post('/verify', postcontroller.verification);

    return Router;
}