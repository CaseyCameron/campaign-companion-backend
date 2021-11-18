import Sequelize from 'sequelize';
import db from '../utils/db.js';

class User extends Sequelize.Model { }

//3rd party auth takes care of password

User.init(
  {
    authId: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'User'
  }
);

export default User;
