var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const namor = require('namor');
var env = require('dotenv').config();

//helpers

const getMatchingResource = require('./helpers/get-matching-resource');

var app = new express();
app.set('port',3000);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'/')));


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

app.post('/getImage', (req, res) => {
  const public_id = req.body.public_id;

  var resources = cloudinary.v2.api.resources(function(error, result){
    return result;
  });

  resources.then(function(list){
    return list.resources
  }).then(function(resources){
    return getMatchingResource(public_id, resources)
  }).then(function(matched){
    console.log('matched',matched.url);
    res.send(matched.url);
  }).catch(function(err){
    console.log(err);
  });

});

app.listen(app.get('port'),function() {
    console.log('Express server listening on port %d',app.get('port'));
});
