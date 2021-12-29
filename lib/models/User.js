import Sequelize from 'sequelize';
import db from '../utils/db.js';

class User extends Sequelize.Model { }

//3rd party auth takes care of password

User.init(
  {
    // userId: {
    //   type: Sequelize.DataTypes.INTEGER(11),
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
    username: {
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
