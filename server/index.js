const Express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = Express.Router(); 

mongoose.connect('mongodb://localhost/haplot', (err) => {
    if (!err) {
        console.log('mongoose successfully connected');
    }
});

const app = new Express();

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

app.use(Express.static(__dirname + './client'));


 const userrs = require('./routes/postRoute')(router);

 app.use('/api', userrs);


app.listen(3000, (err) => {
    if (!err) {
        console.log('Server is running...');
    }
});

