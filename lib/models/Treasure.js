import Sequelize from 'sequelize';
import db from '../utils/db.js';

class Treasure extends Sequelize.Model { }

Treasure.init(
  {
    description: {
      type: Sequelize.DataTypes.STRING(1234)
    },
    sp: {
      type: Sequelize.DataTypes.INTEGER
    },
    cp: {
      type: Sequelize.DataTypes.INTEGER
    },
    gp: {
      type: Sequelize.DataTypes.INTEGER
    },
    pp: {
      type: Sequelize.DataTypes.INTEGER
    },
  },
  {
    sequelize: db,
    modelName: 'Treasure'
  }
);

export default Treasure;
