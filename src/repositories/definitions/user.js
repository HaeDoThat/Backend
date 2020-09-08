const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../loaders/database');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(254),
    allowNull: false,
    unique: true,
    // email 양식이 맞는지 검사해주는 option
    validate: {
      isEmail: true
    }
  },
  pw: {
    type: DataTypes.STRING(72),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'User'
});

module.exports = User;
