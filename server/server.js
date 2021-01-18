
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const images = require('./routes/imageRoutes.js');
const users = require('./routes/userRoutes.js');

const mongoKeys = require('./config.js');

const MONGO_URI = "mongodb+srv://" + mongoKeys.GEN_USER + ":" + mongoKeys.GEN_PWD + "@cluster0.kcbul.gcp.mongodb.net/" + mongoKeys.DB_NAME + "?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('error', (error) => {
    console.log(error);
});

let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


if (process.env.Node_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}


app.use('/api/images', images);
app.use('/api/users', users);

app.listen(PORT, function () {
    console.log('Server listening on port ' + PORT);
});