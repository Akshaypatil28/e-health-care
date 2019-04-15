var express = require('express');
var router = express.Router();
var multer = require('multer');

const Profile = require('../Model/Profile.model');
const PatientDatas = require('../Model/PatientData.model');

var upload = multer({dest: './uploads'}).single('photo');
router.post('/', function(req, res, next) {
  var uid = req.body.uid;
    Profile.findOne({uid: uid},(err,data)=>{
      if(err){
         res.json('false');
      }
      else{
        res.json(data);
      }
    })
  });
  
  router.post('/data', function(req, res) {
   const uid = req.body.uid;
   console.log(uid);
   PatientDatas.find({uid:uid},(err,data)=>{
     
       console.log(data);
        res.json(data);
     
   });

   router.post('/upload',(req,res)=>{
     var path = '';
     upload(req,res,(err)=>{
      if (err) {
        // An error occurred when uploading
        console.log(err);
        return res.status(422).send("an Error occured")
      }  
     // No error occured.
      path = req.file.path;
      return res.send("Upload Completed for "+path); 
     })
   })

  }); 
  
module.exports = router;
