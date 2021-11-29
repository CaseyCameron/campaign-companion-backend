import { Router } from 'express';
import Permission from '../models/Permission.js';

export default Router()
  .post('/', async (req, res, next) => {
    Permission.create(req.body)
      .then(permission => res.send(permission))
      .catch(next);
  })

  .get('/:id', async (req, res, next) => {
    Permission.findByPk(req.params.id, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      }
    })
      .then(permission => res.send(permission))
      .catch(next);
  })

  .get('/', async (req, res, next) => {
    Permission.findAll({
      attributes: ['id', 'action']
    })
      .then(permission => res.send(permission))
      .catch(next);
  });
