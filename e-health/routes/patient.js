var express = require('express');
var router = express.Router();

const Profile = require('../Model/Profile.model');
const PatientDatas = require('../Model/PatientData.model');
/* GET users listing. */

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

  }); 
  
module.exports = router;
