var express = require('express');
var router = express.Router();


var classModule=require('../../modules/class');



const { check, validationResult } = require('express-validator');
router.use(express.static('public'))

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));



router.get('/:id',function(req, res,) {
  var id =req.params.id;
  
      
              res.render('teacher-admin-dashboard', { title: 'TechBista Solutions' });
            

   router.post('/'+id+'/post',function(req, res, next) { 
      var eid=req.body.eid;
      var title=req.body.title;
      var correct=req.body.correct;  
      var total=req.body.total; 
      var time=req.body.time; 
      var status="disabled";
      
            var userDetails=new classModule({
               eid:eid,
               title:title,
               correct:correct,
               total:total,
               time:time,
               status:status
            }); 
            userDetails.save((err)=>{
              if(err) throw err; 
              res.send({redirects:'/questions/'+eid+'/'+total});   
            });
          });
  
});
  module.exports = router;