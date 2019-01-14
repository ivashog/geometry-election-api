'use strict';

const { Pool } = require('pg'),
      config = require('@config/db.config'),
      pool = new Pool(config);

pool.connect();

module.exports = pool;