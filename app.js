var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Olive = require('./models/oliveSchema');
const connectionString = process.env.MONGO_CON

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var OlivesRouter = require('./routes/Olives');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Olives', OlivesRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await Olive.deleteMany();
  let instance1 = new Icecream(
    { Olives_color: "Blue", Olives_quantity: '2lb', Olives_cost: 7 });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });

  let instance2 = new Icecream(
    { Olives_color: "Green", Olives_quantity: '4lb', Olives_cost: 14 });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });

  let instance3 = new Icecream(
    {Olives_color: "Black", Olives_quantity: '6lb', Olives_cost: 21});
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}
let reseed = true;
if (reseed) { recreateDB(); }



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
