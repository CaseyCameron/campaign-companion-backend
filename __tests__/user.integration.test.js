import db from '../lib/utils/db.js';
import request from 'supertest';
import app from '../lib/app.js';

const user = {
  id: 1,
  username: 'user1234',
  email: 'testMaster@gamemaster.com'
};

describe.skip('testing user routes', () => {
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
      .send({ username: 'user1234', email: 'testMaster@gamemaster.com' });

    expect(res.body).toEqual({
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      ...user
    });
  });

  it('GETs a user', async () => {
    const res = await request(app)
      .get('/api/v1/users/1');

    expect(res.body).toEqual(user);
  });

  it('Updates a user via PUT', async () => {
    await request(app)
      .put('/api/v1/users/1')
      .send({ email: 'gamemaster@test.com' });
      
    const res = await request(app)
      .get('/api/v1/users/1');
    
    expect(res.body).toEqual({
      id: 1,
      username: 'user1234',
      email: 'gamemaster@test.com'
    });
  });

  it('DELETEs a user', async () => {
    const res = await request(app)
      .delete('/api/v1/users/1');

    expect(res.body).toEqual({ delete: 'complete' });
  });
});
