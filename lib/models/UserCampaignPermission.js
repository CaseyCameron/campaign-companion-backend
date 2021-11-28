import Sequelize from 'sequelize';
import db from '../utils/db.js';

class UserCampaignPermission extends Sequelize.Model { }

UserCampaignPermission.init(
  {
    // UserCampaignPermissionId: {      
    //   type: Sequelize.DataTypes.INTEGER(11),
    //   allowNull: false,
    //   primaryKey: true
    // },
    CampaignId: {
      type: Sequelize.DataTypes.INTEGER(11),
      primaryKey: false,
      references: {
        model: 'Campaign', 
        key: 'campaignId'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    NpcId: {
      type: Sequelize.DataTypes.INTEGER(11),
      primaryKey: false,
      references: {
        model: 'Npc', 
        key: 'npcId'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    PermissionId: {
      type: Sequelize.DataTypes.INTEGER(11),
      primaryKey: false,
      references: {
        model: 'Permission', 
        key: 'permissionId'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    UserId: {
      type: Sequelize.DataTypes.INTEGER(11),
      primaryKey: false,
      references: {
        model: 'User', 
        key: 'userId'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
  },
  {
    sequelize: db,
    modelName: 'UserCampaignPermission'
  }
);

export default UserCampaignPermission;
