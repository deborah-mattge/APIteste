const { DataTypes, Model}=require('sequelize');
const connection = require('../../database/connection');
 
class Usuario extends Model{

}
Usuario.init ({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true

    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
     cardPermissions:{
         type: DataTypes.STRING,
        
       
     },
     propertiesPermissions:{
         type: DataTypes.STRING,
         
        
     }
}, {
    sequelize: connection,
    modelName: 'users'
}) 
Usuario.sync()
  .then(() => {
    return Usuario.sync({ alter: true });
  })
  .then(() => {
    console.log('Usuário sincronizado com alterações aplicadas');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar usuário', error);
  });
module.exports=Usuario;