const user1 = {
  username: 'user1234',
  email: 'testMaster@gamemaster.com'
};

const user2 = {
  username: 'user3456',
  email: 'gm@gm.net'
};

const campaign1 = {
  name: 'First Test Campaign',
  description: 'First Test description',
  image: 'https://cdn.discordapp.com/attachments/716731135501271101/871626952958672956/2Q.png',
  gameMaster: user1.username,
};

const campaign2 = {
  name: 'Second Test Campaign',
  description: 'Second Test description',
  image: 'https://cdn.discordapp.com/attachments/716731135501271101/871626952958672956/2Q.png',
  gameMaster: user2.username,
};

const npc1 = {
  name: 'npc1',
  race: 'elf',
  alignment: 'N',
  description: 'Short description',
  image: 'https://image.png',
  UserId: 1
};

const npc2 = {
  name: 'npc2',
  race: 'dwarf',
  alignment: 'LN',
  description: 'Short description',
  image: 'https://image.png',
  UserId: 2
};

const createNpc = { action: 'createNpc' };
const editNpc = { action: 'editNpc' };
const removeNpc = { action: 'removeNpc' };
const deleteNpc = { action: 'deleteNpc' };
const createCampaign = { action: 'createCampaign' };
const editCampaign = { action: 'editCampaign' };
const viewCampaign = { action: 'viewCampaign' };
const deleteCampaign = { action: 'deleteCampaign' };

export const seedData = {
  campaigns: [campaign1, campaign2],
  npcs: [npc1, npc2],
  permissions: [
    createNpc, 
    editNpc, 
    removeNpc, 
    deleteNpc, 
    createCampaign, 
    editCampaign, 
    viewCampaign, 
    deleteCampaign
  ],
  users: [user1, user2],
};
