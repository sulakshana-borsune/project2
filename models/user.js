const { Model, STRING } = require('sequelize')

class User extends Model { }

User.init({
  username: {
    type: STRING,
    allowNull: false
},
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
  about: {
    type: STRING(1000)
  }

  }, { sequelize: require('../config'), modelName: 'User' })

module.exports = User