// Aqui faz a conexão com a base de dados:

const Sequelize = require('sequelize');
const dbConfig= require('../config/database');
const {v4: uuid}= require('uuid');

// importando as models
const User = require('../models/User');
const Product = require('../models/Product');
const Category = require('../models/Category');

// Fazendo a comunicação com o banco 
const connection = new Sequelize(dbConfig);


//Cadastrando o model na conexão 
Category.init(connection);
User.init(connection);
Product.init(connection);

//Associando as informações no model das conexões
Category.associate(connection.models);
Product.associate(connection.models);

module.exports = connection;
