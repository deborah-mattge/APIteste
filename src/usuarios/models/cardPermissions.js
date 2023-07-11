const { DataTypes, Model}=require('sequelize');
const connection = require('../../database/connection');
 
class cardPermissions extends Model{

}
cardPermissions.init ({
    id_user: {
        type: DataTypes.STRING,
        allowNull: false,
        foreingKey: true,
        references:{
               model: 'users',
               key: "id"
           },
        primaryKey:true

    },
    permissions:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: connection,
    modelName: 'cardPermissions'
}) 
cardPermissions.sync()
  .then(() => {
    return cardPermissions.sync({ alter: true });
  })
  .then(() => {
    console.log('Card sincronizado com alterações aplicadas');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar usuário', error);
  });
module.exports=cardPermissions;