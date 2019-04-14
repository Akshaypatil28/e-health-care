var express = require('express');
var session = require('express-session');

var router = express.Router();

const Profile = require('../Model/Profile.model');

/* GET home page. */
router.post('/login', function(req, res, next) {
  //  if(req.session.uid){
   var uid = req.body.uid;
    Profile.findOne({uid: uid},(err,data)=>{
      if(err){
         res.json('false');
      }
      else{
        res.json('true');
      }
    })
  //   }
  // else
  //     res.json("false");
    
});


router.post('/doctor', function(req, res, next) {
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

module.exports = router;
