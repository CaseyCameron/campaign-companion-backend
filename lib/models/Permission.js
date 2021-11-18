import Sequelize from 'sequelize';
import db from '../utils/db.js';

class Permission extends Sequelize.Model { }

Permission.init(
  {
    action: {
      type: Sequelize.DataTypes.STRING,
    }
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'Permission'
  }
);

export default Permission;
