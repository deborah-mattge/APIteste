const Squelize = require('sequelize');
const sequelize = new Squelize({
    dialect: 'sqlite',
    storage: './database/database.sqlite'
});


async function testeDatabase(){
    try{
        await sequelize.authenticate(); 
        console.log('banco conectado')
        
    }catch(error){
        console.log('conexao falhou: ', error)
    }
}
testeDatabase().then();
module.exports = sequelize;