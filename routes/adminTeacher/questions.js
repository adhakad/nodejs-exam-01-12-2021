var express = require('express');
var router = express.Router();
const { v4: uuidV4 } = require("uuid");

var classModule=require('../../modules/class');
var questionsModule = require('../../modules/questions');
var optionsModule = require('../../modules/options');
var answerModule = require('../../modules/answer');


const { check, validationResult } = require('express-validator');
router.use(express.static('public'))

var bodyParser = require('body-parser');
const { countDocuments } = require('../../modules/class');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/:eid/:total',function(req, res,) {
   var eid =req.params.eid;
   var total =req.params.total;
     var sn = 0;
     var i = 0; 
       res.render('questions', { title: 'TechBista Solutions',total:total,eid:eid,sn:sn,i:i});
             
});         
 
   
   
 
    router.post('/',function(req, res, next) { 
       const qidd = uuidV4();
       var qid = qidd;
       var eid=req.body.eid; 
       var total=req.body.total;
       var sn=req.body.sn;
       var qns=req.body.qns; 
       var aa=req.body.aa;
       var bb=req.body.bb;  
       var cc=req.body.cc; 
       var dd=req.body.dd;
       var ans=req.body.ans;

       var check=questionsModule.findOne({eid:eid,sn:sn});
       check.exec((err, data)=>{          
          if(data==null){
            var userDetails=new questionsModule({
              qid:qid,
              eid:eid,
              qns:qns,
              sn:sn,   
           });
           userDetails.save((err)=>{
            if(err) throw err; 

            const optionid1 = uuidV4();
            const optionid2 = uuidV4();
            const optionid3 = uuidV4();
            const optionid4 = uuidV4();
            var optionsDetail1=new optionsModule({
              optionid:optionid1,
              qid:qid,
              eid:eid,
              sn:sn,  
              option:aa, 
              ans_sn:1,

            });
            optionsDetail1.save((err)=>{
             if(err) throw err;
            });
            var optionsDetail2=new optionsModule({
              optionid:optionid2,
              qid:qid,
              eid:eid,
              sn:sn,
              option:bb, 
              ans_sn:2,  
            });
            optionsDetail2.save((err)=>{
             if(err) throw err;
            });
            var optionsDetail3=new optionsModule({
              optionid:optionid3,
              qid:qid,
              eid:eid,
              sn:sn,   
              option:cc,
              ans_sn:3,
            });
            optionsDetail3.save((err)=>{
             if(err) throw err;
            });
            var optionsDetail4=new optionsModule({
              optionid:optionid4,
              qid:qid,
              eid:eid,
              sn:sn,   
              option:dd,
              ans_sn:4,
            });
            optionsDetail4.save((err)=>{
             if(err) throw err;
            });
              
              switch (ans) {
                  case 'a':
                      var ansid = optionid1;
                      break;
                  
                  case 'b':
                      var ansid = optionid2;
                      break;
                  
                  case 'c':
                      var ansid = optionid3;
                      break;
                  
                  case 'd':
                      var ansid = optionid4;
                      break;
                  
                  default:
                      var ansid = optionid4;
              }
              
              const id = uuidV4();
              var answerDetail=new answerModule({
                id:id,
                eid:eid,
                sn:sn, 
                ansid:ansid,
              });  
              answerDetail.save((err)=>{
                if(err) throw err;
              });

            if(total==sn){
             res.redirect('/teacher-admin-dashboard/'+eid);
            }else{
              res.render('questions', { title: 'TechBista Solutions',total:total,eid:eid,sn:sn,i:sn}); 
            }
            
           });
          }else{
            res.redirect('/teacher-admin-dashboard/'+eid);
          }
   
          }); 
   });
  module.exports = router;