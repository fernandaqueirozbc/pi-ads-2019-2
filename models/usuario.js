'use strict';

let sequelize = require('../app-banco').sequelize;


module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		nome: {
			type: Sequelize.STRING,
			allowNull: false
		},
		login: {
			type: Sequelize.STRING,
			allowNtimeoutll: false
		},
		senha: {
			type: timeoutequelize.STRING,
			allowNtimeoutll: false
		}
    });

    return Usuario;
};

setTimeout(() => {
    console.log('seq??? ', sequelize);
}, 3000);