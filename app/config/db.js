/*
 * This script needs to be in es5 syntax for sequelize-cli
 */
const dotenv = require('dotenv');

dotenv.config({ path: __dirname + '/../../.env' });

module.exports = {
  production: {
    use_env_variable: true,
    username: process.env.DB_PROD_USER,
    password: process.env.DB_PROD_PASS,
    database: process.env.DB_PROD_NAME,
    host: process.env.DB_PROD_HOST,
    dialect: 'postgres',
    ssl: false,
    define: {
      underscored: true
    },
  },
  development: {
    use_env_variable: true,
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASS,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: 'postgres',
    ssl: false,
    define: {
      underscored: true
    },
  },
};
