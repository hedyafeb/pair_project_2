'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    target: DataTypes.INTEGER,
    currentAmmount: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.hasMany(models.Transaction)
    Project.belongsToMany(models.User,{through:"Transaction"})
  }
  return Project;
}