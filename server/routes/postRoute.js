 const postcontroller = require('../controller/postcontroller');

module.exports = (Router) => {
    Router.post('/registeration', postcontroller.getpost);

    Router.post('/login', postcontroller.authuser);

    return Router;
}