const pgp = require("pg-promise")();

require('dotenv').config();

const cn = {
    host: process.env.PG_HOST, 
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    externaldatabase: process.env.EXT_DATABASE,
    internaldatabase: process.env.INT_DATABASE,
    password: process.env.PG_PASSWORD
};

const db = pgp(cn);

module.exports = db;

