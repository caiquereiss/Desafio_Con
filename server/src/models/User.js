//Representação de como a nossa aplicação vai se comunicar com a base de dados
const {Model, DataTypes} = require('sequelize');
const bcrypt = require("bcrypt");



class User extends Model {
  static init(sequelize) { 
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password_hash: DataTypes.STRING,

    },{
      sequelize
    })  


  }
}

module.exports= User;