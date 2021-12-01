const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/abc', {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology:true,useFindAndModify:false,});
var conn =mongoose.Collection;
var answerSchema =new mongoose.Schema({
    
    id:{
        type:String,
    }, 
    eid:{
        type:Number,
    },     
    sn: {
        type:Number, 
        },
    ansid: {
        type:String, 
        },   
});

var answerModel = mongoose.model('answer', answerSchema);
module.exports=answerModel;

//mongodb+srv://abhishek_dhakad:Aa1Bb2Hh3@cluster0.fxygu.mongodb.net/<dbname>?retryWrites=true&w=majority