// require('dotenv').config();
const Sequelize = require('sequelize');

// Create a Sequelize instance and connect to the database
const sequelize = new Sequelize('s365', 'chandra', 'Chandra@2023', {
  host: '13.127.5.0',
  dialect: 'mysql',
  define: {
    freezeTableName: true,
  }
});

// Check if the database connection is successful
sequelize
  .authenticate()
  .then(() => {
    console.log("DB Connected Successfully!!");
  })
  .catch(err => {
    console.error("DB Connection Error:", err);
  });

module.exports = sequelize;
