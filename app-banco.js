'use strict';

const Sequelize = require('sequelize');

let sequelize = new Sequelize('gf2018', 'adminbandtec', 'b@ndtec2018', {
  host: 'testexyzwtrtwr.database.windows.net', 
  dialect: 'mssql', 
  dialectOptions: {
	options: {
		encrypt: true,
    }
  },
  pool: { 
    max: 5,
    min: 1,
    acquire: 15000,
    idle: 10000
  }
});

console.log('Tentando conectar ao banco de dados...');
sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco com sucesso!');
  })
  .catch(err => {
    console.error('Erro ao tentar conectar com o banco:', err);
  });


let db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
