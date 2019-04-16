var express = require('express');
var router = express.Router();
var multer = require('multer');

const patientProfile = require('../Model/patientProfile.model');
const PatientDatas = require('../Model/PatientData.model');

const storage = multer.diskStorage({
  destination : './uploads',
  filename: function(req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});

var upload = multer({storage: storage}).single('photo');
router.post('/login', function(req, res, next) {
  var uid = req.body.uid;
    patientProfile.findOne({uid: uid},(err,data)=>{
      if(err){
        res.json('false');
        console.log(uid);
     }
     else if(data){
       res.json('true');
     }
     else{
        res.json('false');
     }
    })
  });

  router.post('/profile', function(req, res, next) {
    var uid = req.body.uid;
      patientProfile.findOne({uid: uid},(err,data)=>{
        if(err){
           res.json('false');
        }
        else{
          // console.log(data);
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
  }); 

   router.post('/upload',(req,res)=>{
     var path = '';
     upload(req,res,(err)=>{
      if (err) {
        // An error occurred when uploading
        console.log("err");
        return res.status(422).send("an Error occured");
      }  
     // No error occured.
    //  console.log("kj");
      path = req.file.path;
      res.json("Upload Completed for "+path); 
     });
   });

  
  
module.exports = router;
