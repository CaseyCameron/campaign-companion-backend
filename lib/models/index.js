import Campaign from './Campaign.js';
import Npc from './Npc.js';
import Permission from './Permission.js';
import User from './User.js';

User.hasMany(Npc, { foreignKey: 'NpcId' });
Npc.belongsTo(User, { foreignKey: 'UserId' });

// bridge table
Npc.belongsToMany(Campaign, { through: 'UserCampaignPermissions', foreignKey: 'CampaignId' });
Campaign.belongsToMany(Npc, { through: 'UserCampaignPermissions', foreignKey: 'NpcId' });

Campaign.belongsToMany(User, { through: 'UserCampaignPermissions' });
User.belongsToMany(Campaign, { through: 'UserCampaignPermissions' });

Permission.belongsToMany(User, { through: 'UserCampaignPermissions' });
User.belongsToMany(Permission, { through: 'UserCampaignPermissions' });


// old bridge table attempt
// Campaign.belongsToMany(User, { through: 'UserCampaigns' });
// User.belongsToMany(Campaign, { through: 'UserCampaigns' });

// Permission.belongsToMany(User, { through: 'UserPermissions' });
// User.belongsToMany(Permission, { through: 'UserPermissions' });

// Npc.belongsToMany(Campaign, { through: 'CampaignNpcs' });
// Campaign.belongsToMany(Npc, { through: 'CampaignNpcs' });

export { Campaign, Npc, Permission, User };
