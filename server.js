import app from './lib/app.js';
import db from './lib/utils/db.js';

const PORT = process.env.PORT || 7890;

db.sync({ force: true }).then(result => {
  console.log(result);
  app.listen(3000);
}).catch(err => {
  console.log(err);
});

// when you run server, it hits app which tells server.js to listen on this port
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});

// when you terminate the connection the db.close runs
process.on('exit', () => {
  console.log('Goodbye!');
  db.close();
});
