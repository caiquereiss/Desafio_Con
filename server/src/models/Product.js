//Representação de como a nossa aplicação vai se comunicar com a base de dados
const {Model, DataTypes}= require('sequelize');

class Product extends Model {
  static init(sequelize) { 
    super.init({
      name: DataTypes.STRING,
      catego_name: DataTypes.STRING,    

    },{
      sequelize
    })  


  }
  //Aqui estou fazendo a dependencia das tabela(Categories)
  //Falando que o produto pode ter 1 categoria
  static associate(models){
    this.belongsTo(models.Category, {foreignKey:'id', as: 'owner'});
  }
}

module.exports= Product;