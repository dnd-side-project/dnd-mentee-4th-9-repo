const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require('path');
const dotenv = require("dotenv");
const passport = require("passport");
const {sequelize} = require('./models');
const passportConfig = require('./passport');


dotenv.config();
sequelize.sync({force:false})
.then(()=>{
  console.log('데이터베이스 연결 성공');
})
.catch((err)=>{
  console.error(err);
});
passportConfig();

const app = express();
const indexRouter = require("./routes/index.route");
const authRouter = require('./routes/auth.route');
const plantsRouter = require('./routes/plants.route');
const tagsRouter = require('./routes/tags.route');
const swaggerDoc = require('./routes/swagger.route');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser(process.env.SECRET_KEY));
app.use(
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
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/plants",plantsRouter);
app.use("/tags", tagsRouter);
app.use(swaggerDoc);

module.exports = app;
