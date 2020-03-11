const { Model, STRING, INTEGER, DATE } = require('sequelize')

class RecipeCreator extends Model { }

RecipeCreator.init({
  creatorName: {
    type: STRING,
    allowNull: false
  },
  dob: {
    type: DATE,
    allowNull: true
  },
  dod: {
    type: DATE,
    allowNull: true
  },
  url: {
    type: STRING(500),
    allowNull: true
  },
  about: {
    type: STRING(1000),
    allowNull: true
  }
}, { sequelize: require('../config'), modelName: 'RecipeCreator' })

module.exports = RecipeCreator