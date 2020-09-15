
'use strict';
const sequelize = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('products', { 
      id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
      },
      
      catego_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'categories', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete:'RESTRICT',
      },

      catego_name:{
        type: Sequelize.STRING,
        allowNull: false,
        references: { model:'categories', key: 'name'},
        onUpdate: 'CASCADE',
        onDelete:'RESTRICT',
      },

      name:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
       
      },

      created_at:{
        type: Sequelize.DATE,
        allowNull: false,

      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,

      },
      });
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.dropTable('products');
     
  }
};
