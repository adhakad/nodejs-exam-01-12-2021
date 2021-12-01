const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/abc', {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology:true,useFindAndModify:false,});
var conn =mongoose.Collection;
var classSchema =new mongoose.Schema({
    eid:{
        type:Number,
    },
    subject_id:{type:Number,
        
    },
    uniq_eid: {type:String,
        
        },        
    title: {
        type:String, 
        },
    correct: {
        type:Number, 
        },
    total: {
        type:Number, 
        },
    time: {
        type:Number, 
        },
    status: {
        type:String, 
        },       
    
});

var classModel = mongoose.model('class', classSchema);
module.exports=classModel;

//mongodb+srv://abhishek_dhakad:Aa1Bb2Hh3@cluster0.fxygu.mongodb.net/<dbname>?retryWrites=true&w=majority