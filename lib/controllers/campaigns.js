import Router from 'express';
import Campaign from '../models/Campaign.js';

export default Router()
  .post('/', async (req, res, next) => {
    Campaign.create(req.body)
      .then(campaign => res.send(campaign))
      .catch(next);
  })

  .get('/:id', async (req, res, next) => {
    Campaign.findByPk(req.params.id, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      }
    })
      .then(campaign => res.send(campaign))
      .catch(next);
  })

  .get('/', async (req, res, next) => {
    Campaign.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      }
    })
      .then(campaign => res.send(campaign))
      .catch(next);
  })

  .put('/:id', async (req, res, next) => {
    Campaign.update(req.body, {
      where: {
        id: req.params.id
      }, returning: true
    })
      .then(([, campaign]) => res.send(campaign[0]))
      .catch(next);
  })

  .delete('/:id', async (req, res, next) => {
    Campaign.destroy({
      where: { id: req.params.id }
    })
      .then(() => res.send({ delete: 'complete' }))
      .catch(next);
  });
