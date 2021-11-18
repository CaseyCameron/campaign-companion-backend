import cors from 'cors';
import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';

import campaignController from './controllers/campaigns.js';
import npcController from './controllers/npcs.js';
import userController from './controllers/users.js';

import './models/index.js';

const app = express();
app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true
}));

app.use('/api/v1/campaigns', campaignController);
app.use('/api/v1/npcs', npcController);
app.use('/api/v1/user', userController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
