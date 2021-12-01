const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/abc', {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology:true,useFindAndModify:false,});
var conn =mongoose.Collection;
var optionsSchema =new mongoose.Schema({
    
    optionid:{
        type:String,
    }, 
    eid:{
        type:Number,
    },
    qid:{
        type:String,
    },      
    sn: {
        type:Number, 
        },
    option: {
        type:String, 
        },
    ans_sn: {
        type:Number, 
        },   
});

var optionsModel = mongoose.model('options', optionsSchema);
module.exports=optionsModel;

//mongodb+srv://abhishek_dhakad:Aa1Bb2Hh3@cluster0.fxygu.mongodb.net/<dbname>?retryWrites=true&w=majority