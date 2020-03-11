const { Model, STRING, INTEGER, TEXT } = require('sequelize')

class Recipe extends Model { }

Recipe.init({
  title: {
    type: STRING,
    allowNull: false
  },
  recipeType: {
    type: STRING,
    allowNull: false
  },
  servingSize: {
    type: INTEGER,
    allowNull: true,
  },
  creatorName: {
    type: STRING,
    allowNull: true
  },
  creatorAbout: {
    type: STRING,
    allowNull: true
  },
  recipeText: {
    type: TEXT,
    allowNull: false
  }
}, { sequelize: require('../config'), modelName: 'Recipe' })

module.exports = Recipe