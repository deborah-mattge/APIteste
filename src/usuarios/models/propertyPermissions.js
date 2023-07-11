const { DataTypes, Model}=require('sequelize');
const connection = require('../../database/connection');
 
class propertyPermissions extends Model{

}
propertyPermissions.init ({
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
    modelName: 'propertyPermissions'
}) 
propertyPermissions.sync()
  .then(() => {
    return propertyPermissions.sync({ alter: true });
  })
  .then(() => {
    console.log('Properties sincronizado com alterações aplicadas');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar usuário', error);
  });
module.exports=propertyPermissions;