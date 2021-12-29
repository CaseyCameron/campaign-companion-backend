import Sequelize from 'sequelize';
import db from '../utils/db.js';

class Character extends Sequelize.Model {}

Character.init(
  {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db, 
    modelName: 'Character'
  }
);

export default Character;
