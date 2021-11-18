import Sequelize from 'sequelize';
import db from '../utils/db.js';

class Npc extends Sequelize.Model { }

Npc.init(
  {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    race: {
      type: Sequelize.DataTypes.STRING,
    },
    alignment: {
      type: Sequelize.DataTypes.STRING,
    },
    description: {
      type: Sequelize.DataTypes.STRING(1234),
    },
    image: {
      type: Sequelize.DataTypes.STRING,
    },
    gameMaster: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    campaign: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'Npc'
  }
);

export default Npc;
