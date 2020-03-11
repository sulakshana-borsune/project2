const { Model, STRING, FLOAT } = require('sequelize')

class Region extends Model { }

Region.init({
  regionName: {
    type: STRING,
    allowNull: false
  },
  lat: {
    type: FLOAT,
    allowNull: true
  },
  long: {
    type: FLOAT,
    allowNull: true
  }
}, { sequelize: require('../config'), modelName: 'Region' })

module.exports = Region