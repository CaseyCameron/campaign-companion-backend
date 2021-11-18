import Sequelize from 'sequelize';
import db from '../utils/db.js';

class Campaign extends Sequelize.Model { }

Campaign.init(
  {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.DataTypes.STRING(1234)
    },
    image: {
      type: Sequelize.DataTypes.STRING,
    },
    gameMaster: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'Campaign'
  }
);

export default Campaign;
