/* eslint-disable no-alert */
import app from './lib/app.js';
import db from './lib/utils/db.js';

// eslint-disable-next-line no-console
db.sync({ force: true, alter: true }).then(result => {
  console.log(result);
  app.listen(3000);
}).catch(err => {
  console.log(err);
});

// await db.query('SET FOREIGN_KEY_CHECKS = 0')
//   .then(() => db.sync({ force: true })
//     .then(result => {
//       console.log(result);
//     })
//     .then(function () {
//       return db.query('SET FOREIGN_KEY_CHECKS = 1')
//     })
//     .then(function () {
//       app.listen(3000);
//       console.log('Database synchronised.');
//     }, function (err) {
//       console.log(err);
//     }));
