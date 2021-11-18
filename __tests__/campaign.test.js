import db from '../lib/utils/db.js';
import request from 'supertest';
import app from '../lib/app.js';
import { User } from '../lib/models/index.js';

const user = {
  id: '1',
  authId: 'googleauth|1234',
  email: 'testMaster@gamemaster.com'
};

const campaign = {
  name: 'Second Test Campaign',
  description: 'Second Test description',
  image: 'https://cdn.discordapp.com/attachments/716731135501271101/871626952958672956/2Q.png',
  gameMaster: user.authId,
};

describe('demo routes', () => {
  beforeAll(async () => {
    await db.query('SET FOREIGN_KEY_CHECKS = 0')
      .then(() => db.sync({ force: true })
        .then(result => {
          console.log('result', result);
        })
        .then(() => {
          return db.query('SET FOREIGN_KEY_CHECKS = 1');
        })
        .then(() => {
          console.log('Database synchronised.');
        }));
        
    await User.create({ authId: 'googleauth|1234', email: 'testMaster@gamemaster.com' });
  });

  it('POSTs a campaign', async () => {
    const res = await request(app)
      .post('/api/v1/campaigns')
      .send(campaign);

    expect(res.body).toEqual({ id: 1, ...res.body });
  });

  it('GETs a campaign by id', async () => {
    const res = await request(app)
      .get('/api/v1/campaigns/1');

    expect(res.body).toEqual({ id: 1, ...campaign });
  });
});
