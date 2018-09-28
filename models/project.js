'use strict';
const nodeMail = require('../helpers/sendMail.js')

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    target: DataTypes.INTEGER,
    currentAmmount: { type: DataTypes.INTEGER, allowNull: false}
  }, {
    hooks: {
      afterSave: (nowData) => {
        if (nowData.currentAmmount >= nowData.target) {
          console.log('sudah lebih nnihh', );
          sequelize.models.Transaction.findAll(
            { include: {model: sequelize.models.User} },
            { where: {ProjectId: nowData.id}}
          )
          // .then( data => {
          //   data.forEach
            
          // })
        }
      }
    }
  });
  Project.associate = function(models) {
    // associations can be defined here
    // Project.hasMany(models.Transaction)
    Project.belongsToMany(models.User,{through:"Transaction"})
  }
  return Project;
}