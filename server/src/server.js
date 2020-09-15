// aqui eu faço a 

const express= require('express');
//importando as rotas
const routes= require('./routes');
const cors = require('cors');

// importando a database
require('./database');

const app = express();
app.use(cors());
// para lidar com requisições json:
app.use(express.json());
// mandando o express acessar as rotas:
app.use(routes);



// app está ouvindo a porta 3333
app.listen(3333);