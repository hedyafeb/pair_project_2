'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
      type:DataTypes.STRING,
      defaultValues:'user'
    }
  },{});
  
  User.associate = function(models) {
    // associations can be defined here
    // User.belongsToMany(models.Project,{through:Transaction})
  };
  return User;
};