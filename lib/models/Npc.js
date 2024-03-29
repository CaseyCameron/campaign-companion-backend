import Sequelize from 'sequelize';
import db from '../utils/db.js';

class Npc extends Sequelize.Model { }

Npc.init(
  {
    // npcId: {
    //   type: Sequelize.DataTypes.INTEGER(11),
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
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
    // campaign: {
    //   type: Sequelize.DataTypes.INTEGER,
    //   allowNull: true
    // },
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'Npc'
  }
);

export default Npc;
