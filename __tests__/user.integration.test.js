import db from '../lib/utils/db.js';
import request from 'supertest';
import app from '../lib/app.js';

const user = {
  id: 1,
  authId: 'googleauth|1234',
  email: 'testMaster@gamemaster.com'
};

describe('testing user routes', () => {
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

  it('POSTS a user', async () => {
    const res = await request(app)
      .post('/api/v1/users')
      .send({ authId: 'googleauth|1234', email: 'testMaster@gamemaster.com' });

    expect(res.body).toEqual(
      {
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        ...user
      });
  });
});
