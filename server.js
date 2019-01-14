'use strict';

require('module-alias/register');
const express = require('express'),
      bodyParser = require('body-parser'),
      api = express.Router(),
      apiRoutes = require('@routes'),
      cors = require('@middlewares/cors'),
      app = express();

app.use(cors);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

apiRoutes(api);



app.use('/api/v1', api);


app.listen(8023, () => { console.log('api is running'); });
