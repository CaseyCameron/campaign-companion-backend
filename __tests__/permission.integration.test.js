import db from '../lib/utils/db.js';
import request from 'supertest';
import app from '../lib/app.js';
import Permission from '../lib/models/Permission.js';

const createNpc = { action: 'createNpc' };
const editNpc = { action: 'editNpc' };
const removeNpc = { action: 'removeNpc' };
const deleteNpc = { action: 'deleteNpc' };
const createCampaign = { action: 'createCampaign' };
const editCampaign = { action: 'editCampaign' };
const viewCampaign = { action: 'viewCampaign' };
const deleteCampaign = { action: 'deleteCampaign' };

describe.skip('testing npcs routes', () => {
  beforeAll(async () => {
    await db.query('SET FOREIGN_KEY_CHECKS = 0')
      .then(() => db.sync({ force: true })
        .then(() => {
          return db.query('SET FOREIGN_KEY_CHECKS = 1');
        })
        .then(() => {
          console.log('Database synchronised.');
        }));
  });

  it('POSTS and GETs all permissions', async () => {
    await Permission.bulkCreate(
      [createNpc, editNpc, removeNpc, deleteNpc, createCampaign, editCampaign, viewCampaign, deleteCampaign]
    );

    const res = await request(app)
      .get('/api/v1/permissions/');

    expect(res.body).toEqual([
      { id: 1, ...createNpc }, 
      { id: 2, ...editNpc },
      { id: 3, ...removeNpc }, 
      { id: 4, ...deleteNpc }, 
      { id: 5, ...createCampaign }, 
      { id: 6, ...editCampaign }, 
      { id: 7, ...viewCampaign }, 
      { id: 8, ...deleteCampaign }]);
  });

  it('GETs a permission', async () => {
    const res = await request(app)
      .get('/api/v1/permissions/2');
    
    expect(res.body).toEqual({ id: 2, ...editNpc });
  });
});
