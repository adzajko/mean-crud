require('dotenv').config();
const expressApp = require('./app');
const http = require('http');
const applicationPort = process.env.PORT || 3000;
const sequelize = require('./util/database/db');

const server = http.createServer(expressApp);

sequelize
  .sync()
  .then(() => {
    server.listen(applicationPort, () => {
      console.log('API running.');
    });
  })
  .catch(err => {
    console.log(err);
    process.exit(-1);
  });
