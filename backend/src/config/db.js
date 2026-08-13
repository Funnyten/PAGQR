const mysql = require('mysql2/promise');
require('dotenv').config();

const {
  DB_HOST = 'mysql.railway.internal',
  DB_PORT = 3306,
  DB_USER = 'root',
  DB_PASSWORD = 'EszZHkoRYvjPnEUDXhqxwwXghsFMsKDu',
  DB_NAME = 'railway',
  DB_TIMEZONE = '-05:00'
} = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  // Los DATETIME de eventos representan la hora local de Ecuador.
  // Esto evita que Railway (UTC) los serialice como si ya fueran UTC.
  timezone: DB_TIMEZONE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true
});

module.exports = pool;
