// basicamente o controller ele lida com as requisições e devolve resposta para o front-end  para as aplicações
const Product= require('../models/Product');
const Category = require('../models/Category');
const { store, index } = require('./UserController');
const {v4: uuid}= require('uuid');
const { response } = require('express');

module.exports = {

  async index(req, res){
    const products = await Product.findAll();
     return res.json(products);
  },

  /*async index(req, res){
    const {catego_id} = req.params;

    const category = await Category.findByPk(catego_id, {
      include: { association: 'products'}
    });


    return res.json(category.products);

  },*/


  async store(req, res){
    const {name, catego_name}= req.body;
     //const {catego_name}= req.params;

   
     

     const category = await Category.findOne({where:{name:catego_name}});
  
     if(!category){
       return res.status(400).json({error:'Catego not found'});
     }
     const catego_id = category.toJSON().id;
     const product = await Product.create({
       name,
       catego_name,
       catego_id,

     });
     return res.json(product);
  },


  async delete(req, res){

    const {prod_id} = req.params;
    const { name }= req.body;

    const product = await Product.findByPk(prod_id);

     if(!product){
       return res.status(400).json({error:'Product not found'});
     }
     
        product.destroy().then(function(){
          
            return res.status(200).json({error:'Success'});
          }

        ).catch(function(error){
          return res.status(400).json({ error });

        });
      },

      async put(req, res){
        const {id, name, catego_id}= req.body;
    
        const product = await Product.findByPk(id);
    
        if(!product){
          return res.status(400).json({error:'Catego not found'});
        }
        
           product.update({id, name, catego_id}).then(function(Rows){
             
               return res.status(200).json(Rows);
             }
    
           ).catch(function(error){
             return res.status(400).json({ error });
    
           });
      }
};