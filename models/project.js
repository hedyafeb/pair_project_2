'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {
      type:DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    description: {
      type:DataTypes.STRING,
      validate:{
        notEmpty: true,
      }
    },
    target: {
      type:DataTypes.INTEGER,
      validate:{
        isInt: true,
      }
    },
    currentAmmount: {
      type:DataTypes.INTEGER,
      validate:{
        isInt: true,
      }
    }
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsToMany(models.User,{through:'Transactions'})
  }
  return Project;
}

// isInt