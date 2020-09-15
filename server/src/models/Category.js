//Representação de como a nossa aplicação vai se comunicar com a base de dados
const {Model, DataTypes}= require('sequelize');

class Category extends Model {
  static init(sequelize) { 
    super.init({
      name:{ type: DataTypes.STRING,
        onUpdate: 'CASCADE',
        onDelete:'CASCADE',
      }
      
      

    },{
      sequelize
    })  


  }
  //Aqui estou fazendo a dependencia das tabela(product)
  //Falando que a categoria pode ter N produtos 
  static associate(models){
    this.hasMany(models.Product, {foreignKey:'catego_id', as: 'products'});
  }
}

module.exports= Category;