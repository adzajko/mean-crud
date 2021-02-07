const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const appRoutes = require('./routes/index.routes');

const { dbRelations } = require('./util/database/database-relations');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(appRoutes);
dbRelations();

module.exports = app;
