// Aqui armazena as credencias de acesso ao banco de dados e exporta:
module.exports = {
  dialect:'postgres',
  host:'localhost',
  username:'postgres',
  password: 'estudo',
  database:'consys',
  define:{
    timestamps: true,
    underscored: true,

  },
};