// import app from '../app.js';
// import db from '../utils/db.js';
import { seedData } from './seed-data.js';
import { User, Npc, Campaign, Permission } from '../models/index.js';

const loadSyncData = async () => {
  await User.bulkCreate(seedData.users);
  await Npc.bulkCreate(seedData.npcs);
  await Campaign.bulkCreate(seedData.campaigns);
  await Permission.bulkCreate(seedData.permissions);
};

loadSyncData();
