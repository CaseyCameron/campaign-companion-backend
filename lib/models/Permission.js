import Sequelize from 'sequelize';
import db from '../utils/db.js';

class Permission extends Sequelize.Model { }

Permission.init(
  {
    // permissionId: {
    //   type: Sequelize.DataTypes.INTEGER(4),
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
    action: {
      type: Sequelize.DataTypes.STRING,
    }
  },
  {
    // timestamps: false,
    sequelize: db,
    modelName: 'Permission'
  }
);

export default Permission;
