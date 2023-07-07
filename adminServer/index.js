require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const databaseConnection = require('./src/models/dbConnection');

const db = process.env.DB;
const port = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);

app.use(
  cors({
      origin: '*',
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  helmet.contentSecurityPolicy({
     useDefaults: true,
     directives: {
        'img-src': ["'self'", 'https: data:'],
     },
  })
);
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
  res.setHeader(
     'Access-Control-Allow-Headers',
     'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  );
  next();
});
// app.use(logger('dev'));
// app.use(logErrors);

// if (process.env.NODE_ENV === 'production') {
//    // for more information about requests.
//    app.use(logger('combined'));
//    // for build file
//    app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
//    });
// }

// API Routes
const authRouter = require('./src/routes/authRoutes');
const newsRouter = require('./src/routes/newsArticleRoutes');
const categoryRouter = require('./src/routes/categoryRoutes');

// Api Routes paths
app.use('/auth', authRouter);
app.use('/news', newsRouter);
app.use('/category', categoryRouter);

databaseConnection(db, () =>{
  // server start
  server.listen(port, () => {
    console.log(`server is running in port ${port}`);
  });
});

server.timeout = 10000;
