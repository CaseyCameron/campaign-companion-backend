import Campaign from './Campaign.js';
import Npc from './Npc.js';
import Permission from './Permission.js';
import User from './User.js';

User.hasMany(Npc);
Npc.belongsTo(User);

//bridge tables
Campaign.belongsToMany(User, { through: 'UserCampaigns' });
User.belongsToMany(Campaign, { through: 'UserCampaigns' });

Permission.belongsToMany(User, { through: 'UserPermissions' });
User.belongsToMany(Permission, { through: 'UserPermissions' });

Npc.belongsToMany(Campaign, { through: 'CampaignNpcs' });
Campaign.belongsToMany(Npc, { through: 'CampaignNpcs' });

export { Campaign, Npc, Permission, User };
