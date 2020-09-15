// basicamente o controller ele lida com as requisições e devolve resposta para o front-end  para as aplicações
const User = require('../models/User');
const bcrypt = require('bcryptjs');
module.exports={

  async index(req, res){
    const users = await User.findAll();
     return res.json(users);
  },

  

  //Aqui está sendo feito  a inserção de um novo usuario 
    async store(req, res) {

      const {
        password
      } = req.body
  // Aqui está sendo feito a codficação da senha do usuario com parametro salt de 8  que será o número de vezes que a senha será misturada
      const passwordHash = await bcrypt.hashSync(password, 8)
  
      req.body.password_hash = passwordHash
  
      console.log(req.body)
      const {
        email,
        name
        
        
        
      } = await User.create(
        req.body,
      );
  
      return res.json({
        email
       
      });
    },



    //Aqui está sendo feito a validação para o login
    // Utilizando  compareSync do 
    async login(req, res){
      const {email, password} =req.body;
      //Validando se o e-mail existe
      const result=  await User.findOne({where:{ email: email}});
       
      //Caso não exista, cai nesse if com mensagem de retorno
      if(!result){
        return res.status(400).json('Falha no login, usuario não cadastrado.');
      }
      
      console.log(result, result.password_hash);
      // Caso exista  vamos fazer a comparação da senha criptografada  com o compareSync
      const verify = bcrypt.compareSync(password, result.password_hash);
      //Caso a senha seja diferente, vai retrornar a mensagem abaixo
      if(!verify){
        return res.status(400).json('Falha no login, senha incorreta.');
      }
      //Caso a comparação seja sucesso, trás a mensagem abaixo, retornando o resultado  sem a senha, para obter segurança
      return res.status(200).json( 
       { id:result.id,
        name: result.name,
        email: result.email
      }
        );
    }
  
};

