var express = require('express');
var router = express.Router();
var multer = require('multer');
var Busboy = require('busboy');

const patientProfile = require('../Model/patientProfile.model');
const PatientDatas = require('../Model/PatientData.model');

const storage = multer.diskStorage({
  destination : './uploads',
  filename: function(req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});

var upload = multer({storage: storage}).single('image');
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
    console.log("summary: "+req.body.summary);
      path = req.file.path;
      res.json("Upload Completed for "+path); 
     });

      // const busBoy = new  Busboy({headers: req.headers});
      // busBoy.on('file', (fieldname, file,  filename, encoding, mimetype) => {
      //     console.log("ljgrrkw");
      // });

      // busBoy.on('field')
   });

  
  
module.exports = router;
