const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/abc', {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology:true,useFindAndModify:false,});
var conn =mongoose.Collection;
var questionsSchema =new mongoose.Schema({
    
    qid:{
        type:String,
    }, 
    eid:{
        type:Number,
    },
    qns:{type:String,
        
    },      
    sn: {
        type:Number, 
        },    
});

var questionsModel = mongoose.model('questions', questionsSchema);
module.exports=questionsModel;

//mongodb+srv://abhishek_dhakad:Aa1Bb2Hh3@cluster0.fxygu.mongodb.net/<dbname>?retryWrites=true&w=majority