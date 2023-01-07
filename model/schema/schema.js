// instantiate sequelize
const { Sequelize, DataTypes } = require('sequelize');
const sqlConnection = require('../../db/connection');
require('dotenv').config();

// 'Compound' is model name (pulralize form will be table name)
// and here we are definig the model(we can call it schema) 
const compoundModel = sqlConnection.define('Compound', {
  // Model attributes are defined here
  id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  compundName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  imageLink: {
    type: DataTypes.STRING
  }
});

module.exports = compoundModel