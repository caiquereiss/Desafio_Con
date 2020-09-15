//Aqui ficam as rotas:

const express = require('express');
const {v4: uuid}= require('uuid');
const bcrypt =require('bcryptjs');
const UserController= require('./controllers/UserController');
const CategoryController= require('./controllers/CategoryController');
const ProductController = require('./controllers/ProductController');



const routes = express.Router();

routes.get('/users', UserController.index); // Listando os usuarios

routes.post('/users', UserController.store); // Inserindo um usuario

routes.post('/users/login', UserController.login); // Aqui faz a validação do login




routes.get('/categorys', CategoryController.index); // Listando as categorias
routes.post('/categorys', CategoryController.store); // Inserindo categorias
routes.delete('/categorys/:catego_id', CategoryController.delete); // Deletando as categorias
routes.put('/categorys', CategoryController.put); // Alterando as categorias



routes.get('/products', ProductController.index); // Listando os produtos cadastrados
routes.post('/categorys/:catego_name/products', ProductController.store); // inserindo os produtos
routes.delete('/products/:prod_id', ProductController.delete); // deletando os produtos
routes.put('/products', ProductController.put); // alterando os produtos







module.exports = routes;