// basicamente o controller ele lida com as requisições e devolve resposta para o front-end  para as aplicações

const Category = require('../models/Category');
const Product = require('../models/Product');
const { put } = require('../routes');

module.exports={


  // Aqui estou listando as categoryas criadas.
  async index(req, res){
    const categorys = await Category.findAll();
     return res.json(categorys);
  },
// Aqui estou  inserindo uma categoria
  async store(req, res){
    const { name }=req.body;

    const category = await Category.create({ name });

    return res.json(category);
  },
// Metodo para deletar uma categoria
  async delete(req, res){

    const {catego_id} = req.params;
    const { name }= req.body;
// Parametro para validar a categoria
    const category = await Category.findByPk(catego_id);

    //Verificando se a categoria existe.
     if(!category){
       return res.status(400).json({error:'Catego not found'});
     }
     // utilizando o destroy para fazer a deleção 
        category.destroy().then(function(){
          // Sucesso ao deletar 
            return res.status(200).json({error:'Success'});
          }

        ).catch(function(error){
          return res.status(400).json({ error });

        });
      
  },
// Fazendo a alteração dos produtos basicamente a mesma ideia da deleção.
  async put(req, res){
    const {id, name}= req.body;

    const category = await Category.findByPk(id);

    if(!category){
      return res.status(400).json({error:'Catego not found'});
    }
    
       category.update({id, name}).then(function(Rows){
         
           return res.status(200).json(Rows);
         }

       ).catch(function(error){
         return res.status(400).json({ error });

       });



  },
};

