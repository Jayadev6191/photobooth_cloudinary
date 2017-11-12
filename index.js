var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');
var http = require('http');

var app = express();
var server=http.createServer(app);

// view engine setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',function(req,res){
    res.send("hello world");
});

app.get('/getImage',function(req,res){
    var name=req.body.name;
    res.send(name);
});


// catch 404 and forward to error handler

server.listen(3001);
module.exports = app;


// const fs = require('fs');
// const express = require('express');
// const bodyParser = require('body-parser');
// const http = require('http');
// const path = require('path');
// const app = express();
// const multer  = require('multer');
// const cloudinary = require('cloudinary');
// const upload = multer({ dest: 'uploads/' })
// const namor = require('namor');
// var env = require('dotenv').config();


// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// var public_id = namor.generate({ words: 2, numbers: 0 });
// // console.log(public_id);


// cloudinary.config({ 
//     cloud_name: process.env.CLOUD_NAME, 
//     api_key: process.env.API_KEY, 
//     api_secret: process.env.API_SECRET
// });

// //get list
// // cloudinary.v2.api.resource('sample', 
// // function(error, result){console.log(result)});

// // {public_id:'puppy'}

// // cloudinary.v2.uploader("uploads/puppy.jpg" ,{use_filename: false, public_id: public_id, upload_preset:'photobooth', cloud_name: 'dmlzi2t0t'}, function(error, result) { 
// //     console.log(result) 
// // });

// var options = {
//     public_id: public_id,
//     faces:true,
//     colors:true,
//     phash:true,
//     // categorization: "imagga_tagging",
//     // auto_tagging: 1.0,
//     image_metadata: true,
//     resource_type:'image'
// };



// app.use(express.static('public'));
// app.get('/', (req, res) => {
//     console.log("cloudinary",cloudinary);
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/getImage', (req, res) => {
//     console.log(req.body.public_id);
//     res.send("hello world");
// });

// // app.get('/upload', upload.any(), (req, res) => {
// //     // console.log(req.files);
// //     // res.send(req.files);
// //     // var tempPath = req.files.file.path;
// //     // console.log(tempPath);
// // });


// // app.post('/upload', upload.any(), (req, res) => {
// //     console.log(req.files);
// //     res.send(req.files);
// //     // var tempPath = req.files.file.path;
// //     // console.log(tempPath);
// // });

app.listen(3001, () => console.log('Example app listening on port 3001!'))