const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');
const passport = require('passport');
const {sequelize} = require('./models');
const passportConfig = require('./passport');
const rateLimit = require('express-rate-limit');
const oneMinute = 1 * 60 * 1000;

const indexRouter = require('./routes/index.route');
const authRouter = require('./routes/auth.route');
const plantsRouter = require('./routes/plants.route');
const tagsRouter = require('./routes/tags.route');
const swaggerDoc = require('./routes/swagger.route');

class App {
  constructor() {
    this.app = express();

    this.setConfig();

    this.dbConnection();

    this.setMiddleWare();

    this.setRouting();
  }

  setConfig() {
    dotenv.config();
    passportConfig();
  }

  dbConnection() {
    sequelize
      .sync({force: false})
      .then(() => {
        console.log('데이터베이스 연결 성공');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  setMiddleWare() {
    if (process.env.NODE_ENV === 'production') {
      this.app.use(morgan('combined'));
      this.app.use(
        cors({origin: 'https://www.seeat-plant.com', credentials: true})
      );
    } else {
      this.app.use(morgan('dev'));
      this.app.use(cors({origin: "*", credentials: true}));
    }
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.use(cookieParser(process.env.SECRET_KEY));
    this.app.use(
      session({
        saveUninitialized: false,
        resave: false,
        secret: process.env.SECRET_KEY,
        cookie: {
          httpOnly: true,
          secure: false,
        },
      })
    );
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    //접속한 IP의 1분당 최대 API 호출 횟수를 60번으로 제한. Dos 공격 방지
    this.app.use(
      rateLimit({
        windowMs: oneMinute,
        max: 60,
      })
    );
  }

  setRouting() {
    this.app.use('/', indexRouter);
    this.app.use('/auth', authRouter);
    this.app.use('/plants', plantsRouter);
    this.app.use('/tags', tagsRouter);
    this.app.use(swaggerDoc);
    this.app.use((req, res, next) => {
      const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
      error.status = 404;
      next(error);
    });
    this.app.use((err, req, res, next) => {
      console.error(err);
      res.locals.message = err.message;
      res.locals.error = {};
      res.status(404).send('error');
    });
  }
}

module.exports = new App().app;
