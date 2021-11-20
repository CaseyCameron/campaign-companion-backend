import db from '../lib/utils/db.js';
import request from 'supertest';
import app from '../lib/app.js';

const user = {
  id: 1,
  authId: 'googleauth|1234',
  email: 'testMaster@gamemaster.com'
};

const npc = {
  name: 'npc',
  race: 'elf',
  alignment: 'N',
  description: 'Short description',
  image: 'https://image.png',
  // authId: user.authId,
  campaign: ''
};

describe('testing npcs routes', () => {
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

  it('POSTs an npc', async () => {
    const res = await request(app)
      .post('/api/v1/npcs')
      .send(npc);
    expect(res.body).toEqual({ id: 1, ...npc });
  });

  it('GETs an npc', async () => {
    const res = await request(app)
      .get('/api/v1/npcs/1');

    expect(res.body).toEqual({ 
      id: 1, 
      UserId: null,
      ...npc });
  });
});
