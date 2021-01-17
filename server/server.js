
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const images = require('./routes/imageRoutes.js');
const users = require('./routes/userRoutes.js');

const DB_NAME = "imstor";
const GEN_USER = "imstor_general";
const GEN_PWD = "imgrepo";

const MONGO_URI = "mongodb+srv://" + GEN_USER + ":" + GEN_PWD + "@cluster0.kcbul.gcp.mongodb.net/" + DB_NAME + "?retryWrites=true&w=majority";
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
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/images', images);
app.use('/api/users', users);

app.listen(PORT, function () {
    console.log('Server listening on port ' + PORT);
});