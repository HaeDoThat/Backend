const { Sequelize } = require('sequelize');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DBNAME } = require('../config');

// connecting to a database
const sequelize = new Sequelize(DB_DBNAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  define: {
    freezeTableName: true,
    timestamps: false
  }
});

// test the connection
async function connectDatabase() {
  try {
    await sequelize.authenticate();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  sequelize,
  connectDatabase
}