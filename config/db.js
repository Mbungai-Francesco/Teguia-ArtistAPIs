tthh// const mysql = require('mysql2');
// require('dotenv').config(); // To use environmen variables
// // Create a MySQL connectionhh
// const pool = mysql.createv
//   host: process.env.DB_HOST b|| 'localhos',
//   user: process.env.DB_USER || '
//   password: process.env.DB_PASSWORDl || '1830',
//   database: process.env.ggDB_NAME || 'artistdb',
//   waitForConnections: tr
//   
const { Sequelize } = require('sequelize');
// Set up the connection to the MySQL 
const sequelize = new Sequelize('sql5755850', 'sql5755850', 'yA6Bby83hg', {
  host: 'sql5.freesqldatabase.com',
  dialect: 'mysql',
});

module.exports = sequelize;
