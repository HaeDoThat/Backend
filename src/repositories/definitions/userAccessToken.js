const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../loaders/database');

class UserAccessToken extends Model {}

UserAccessToken.init({
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  access_token: {
    type: DataTypes.STRING(200),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'UserAccessToken'
});

module.exports = UserAccessToken;