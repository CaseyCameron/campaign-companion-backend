import { Router } from 'express';
// import Campaign from '../models/Campaign.js';
import Npc from '../models/Npc.js';

export default Router()
  .post('/', async (req, res, next) => {
    Npc.create(req.body)
      .then((npc) => res.send(npc))
      .catch(next);
  })

  .get('/:id', async (req, res, next) => {
    Npc.findByPk(req.params.id, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    })
      .then((npc) => res.send(npc))
      .catch(next);
  })

// GET npcs by campaign id
// This assumes we have a foreignKey relation with Campaign
// .get('/campaign/:id', async (req, res, next) => {
//   Npc.findAll(req.params.id, {
//     attributes: {
//       exclude: ['createdAt', 'updatedAt'],
//     },
//     where: {
//       'Npc.campaignId': req.params.id
//     }
//   })
//     .then(npcs => res.send(npcs))
//     .catch(next);
// })

  .get('/', async (req, res, next) => {
    Npc.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    })
      .then((npc) => res.send(npc))
      .catch(next);
  })

  .put('/:id', async (req, res, next) => {
    Npc.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then(([, npc]) => res.send(npc[0]))
      .catch(next);
  })

  .delete('/:id', async (req, res, next) => {
    Npc.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.send({ delete: 'complete' }))
      .catch(next);
  });
