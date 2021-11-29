import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_URL,
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'password',
  {
    host:  process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'campaign_companion',
    logging: false,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
};

// sequelize.sync({ force: true });

export default sequelize;
