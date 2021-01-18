const express = require('express');
    path = require('path');
    AWS = require('aws-sdk'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    multerS3 = require('multer-s3'),
    fs = require('fs');
    async = require('async');

const ImageModel = require('../models/imageModel.js');
const awsKeys = require('../config.js');

const BUCKET_NAME = 'dvhimstore' 

const router = express.Router();

AWS.config.update({
    region: awsKeys.region,
    accessKeyId: awsKeys.accessKeyId,
    secretAccessKey: awsKeys.secretAccessKey,
});

AWS.config.getCredentials(function(err) {
    if (err) 
        console.log(err.stack);
    else {
        console.log("Connected to S3");
    }
});

const s3 = new AWS.S3();

var upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: BUCKET_NAME,
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, file.originalname)
      }
    })
  })

const view = (res, fileName) => {
    (async function() {
        const params = {
            Bucket: BUCKET_NAME,
            Key: fileName,
        };

        const data = await s3.getObject(params).promise();
        res.send(encode(data.Body));
    })();

};

const viewAll = (res) => {
    (async () => {
        console.log("here");
        const params = {
            Bucket: BUCKET_NAME,
            Prefix: ''
        };
    
        const response = await s3.listObjects(params).promise();

        var images = [];
        console.log("here");

        const get = (key) => {
            const params = {
                Bucket: BUCKET_NAME,
                Key: key
            };
    
            return s3.getObject(params).promise();
        };

        response.Contents.forEach(file => {
            images.push(get(file.Key));
        });

        Promise.all(images).then(function(values) {
            res.send(values);
        });
    })();
}


function encode(data){
    let buf = Buffer.from(data);
    let base64 = buf.toString('base64');
    return base64
}

router.get('/view', function (req, res) {
    let image_key = req.query.image_key;
    view(res, image_key);
});

router.get('/viewAll', function (req, res) {
    viewAll(res);
});

router.get('/viewPublic', function (req, res) {
    let email = req.query.email;
    // Get public image records
    console.log(email);
    (async () => {
        const query = email?{ $or: [{ $and: [{private: true}, 
                                            {email: email}]}, 
                                    {private: false}]}: 
                            {private: false};

        const img_records = await ImageModel.find(query);
        const keys = img_records.map(e => e.path);
        console.log(keys);
        
        const get = (key) => {
            const params = {
                Bucket: BUCKET_NAME,
                Key: key
            };
            return s3.getObject(params).promise();
        };

        var img_files = [];

        keys.forEach(key =>  img_files.push(get(key)));

        Promise.all(img_files).then(function(resolved) {
            console.log(img_files);
            res.send({files: resolved, 
                        records: img_records});
        });
    })();
});

router.post('/upload', upload.array('file'), function (req, res) {
    let new_files = req.query;
    (async () => {
        for (var i = 0; i < Object.keys(new_files).length; i++) {
            var r = await ImageModel.create(JSON.parse(new_files[i]), function (err) {
                if (err) 
                    console.log(err);
            });
        }
    })();
    res.send('Successfully uploaded ' + req.files + ' files!')
});


router.post('/remove', function (req, res) {
    let filename = req.query.file;
    console.log(req.query);
    (async () => {
        await ImageModel.deleteMany({path: filename});

        const params = {
            Bucket: BUCKET_NAME,
            Key: filename
        };

        s3.deleteObject(params, function(err, data) {
            if (err) 
                console.log(err);                
        });

        res.send("Deleted " + filename);
    })();

});



module.exports = router;