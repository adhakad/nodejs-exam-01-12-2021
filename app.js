
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var dashboardRouter = require('./routes/dashboard');



var teacherAdminDashboardRouter = require('./routes/adminTeacher/teacher-admin-dashboard');
var questionsRouter = require('./routes/adminTeacher/questions');


app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret:'~K]d9@5LEpD}t267',
  resave:false,
  saveUninitialized:true,
}));

app.get('/room/:id', (req, res) => {
  var abcd = req.params.id;
  res.redirect('/'+abcd) 
  app.get('/:id',function(req, res, next) {
    res.render('room', {roomId: req.params.id});
  });
}); 

app.use('/', indexRouter);
app.use('/dashboard', dashboardRouter);

app.use('/teacher-admin-dashboard', teacherAdminDashboardRouter);
app.use('/questions', questionsRouter);





module.exports = app;