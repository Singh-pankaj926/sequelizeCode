// instantiate sequelize
const { Sequelize, DataTypes } = require('sequelize');
const sqlConnection = require('../../db/connection');

// 'Compound' is model name (pulralize form will be table name)
// and here we are definig the model(we can call it schema) 
const compoundModel = sqlConnection.define('Compound', {
  // Model attributes are defined here
  id:{
    type: DataTypes.INTEGER,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT
    // allowNull defaults to true
  },
  imageLink: {
    type: DataTypes.STRING
  }
});

module.exports = compoundModel