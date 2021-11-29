import db from '../lib/utils/db.js';
import request from 'supertest';
import app from '../lib/app.js';
import User from '../lib/models/User.js';

const npc1 = {
  name: 'npc',
  race: 'elf',
  alignment: 'N',
  description: 'Short description',
  image: 'https://image.png',
};

const npc2 = {
  name: 'npc2',
  race: 'elf',
  alignment: 'N',
  description: 'Second npc',
  image: 'https://image.png',
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

  it.only('POSTs an npc', async () => {
    // create a user to associate with the NPC
    const user = await User.create({
      authId: 'googleauth|1234',
      email: 'testMaster@gamemaster.com'
    });

    // send the user.id for the foreignKey column, include npc id, and spread in npc1
    const res = await request(app)
      .post('/api/v1/npcs/')
      .send({ UserId: user.id, ...npc1 });

    expect(res.body).toEqual({ id: 1, UserId: 1, ...npc1 });
  });

  it('GETs an npc', async () => {
    const res = await request(app)
      .get('/api/v1/npcs/1');

    expect(res.body).toEqual({ id: 1, UserId: 1, ...npc1 });
  });

  it('Gets all npcs', async () => {
    // make a new NPC
    await request(app)
      .post('/api/v1/npcs/')
      .send({ UserId: 1, ...npc2 });

    // get the two NPCs
    const res = await request(app)
      .get('/api/v1/npcs');

    expect(res.body).toEqual([{ id: 1, UserId: 1, ...npc1 }, { id: 2, UserId: 1, ...npc2 }]);
  });

  it('Updates an npc column via PUT', async () => {
    await request(app)
      .put('/api/v1/npcs/1')
      .send({ description: 'updated description' });

    const res = await request(app)
      .get('/api/v1/npcs/1');

    expect(res.body).toEqual({ 
      id: 1,
      UserId: 1,
      name: 'npc',
      race: 'elf',
      alignment: 'N',
      description: 'updated description',
      image: 'https://image.png',
    });
  });

  it('DELETEs an npc', async () => {
    const res = await request(app)
      .delete('/api/v1/npcs/2');

    expect(res.body).toEqual({ delete: 'complete' });
  });
});
