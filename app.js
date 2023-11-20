const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('config');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const teamsRouter = require('./routes/teams');
const socialsRouter = require('./routes/socials');
const rolesRouter = require('./routes/roles');
const permissionsRouter = require('./routes/permissions');
const skillsRouter = require('./routes/skills');
const backlogsRouter = require('./routes/backlogs');
const storyCardsRouter = require('./routes/storyCards');
const userRolesRouter = require('./routes/userRoles');
const mongoose = require('mongoose');

const app = express();

const url = config.get("dbConnection");
mongoose.connect(url);

const db = mongoose.connection;

db.on('open', ()=>{
  console.log('Conexión con la base de datos exitosa.');
});

db.on('error', ()=>{
  console.log('Error al conectar con la base de datos.');
})

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
app.use('/projects', projectsRouter);
app.use('/teams', teamsRouter);
app.use('/socials', socialsRouter);
app.use('/roles', rolesRouter);
app.use('/permissions', permissionsRouter);
app.use('/skills', skillsRouter);
app.use('/backlogs', backlogsRouter);
app.use('/storyCards', storyCardsRouter);
app.use('/userRoles', userRolesRouter);

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