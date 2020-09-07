const { User, UserAccessToken } = require('./definitions');

User.hasMany(UserAccessToken, {
  foreignKey: 'user_id',
  sourceKey: 'id',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
});

UserAccessToken.belongsTo(User, {
  foreignKey: 'user_id',
  targetKey: 'id',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
});

module.exports = { User, UserAccessToken };