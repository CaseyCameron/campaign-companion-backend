import Router from 'express';
import User from '../models/User.js';

export default Router()
  .post('/', async (req, res, next) => {
    User.create(req.body)
      .then(user => res.send(user))
      .catch(next);
  })

  .get('/:id', async (req, res, next) => {
    User.findByPk(req.params.id, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      }
    })
      .then(user => res.send(user))
      .catch(next);
  })

  .get('/', async (req, res, next) => {
    User.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      }
    })
      .then(user => res.send(user))
      .catch(next);
  })

  .put('/:id', async (req, res, next) => {
    User.update(req.body, {
      where: {
        id: req.params.id
      }, returning: true
    })
      .then(([, user]) => res.send(user[0]))
      .catch(next);
  })

  .delete('/:id', async (req, res, next) => {
    User.destroy({
      where: { id: req.params.id }
    })
      .then(() => res.send({ delete: 'complete' }))
      .catch(next);
  });
