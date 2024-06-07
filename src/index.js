import express from 'express';
import { config } from './config.js';
import { UserRoutes } from './routes/user-routes.js';

export class Server {
  constructor() {
    this.app = express();
    this.app.use(express.json()); // for parsing POST body

    this.port = process.env.PORT || 3000;
    this.base_url = config.api.base_url;
  }

  setupRoutes() {
    new UserRoutes(this.app, `${this.base_url}/users`);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}

const server = new Server();
server.setupRoutes();
server.start();

///

import mysql from 'mysql';

let pool = mysql.createPool({
  connectionLimit: config.database.connectionLimit,
  host: config.database.host,
  database: config.database.database,
  user: config.database.user,
  password: config.database.password
});

// Perform a query
pool.query('SELECT * FROM user', (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error.stack);
    return;
  }

  console.log('Query results:', results);
});

// Close the pool
// pool.end((err) => {
//   if (err) {
//     console.error('Error ending the connection:', err.stack);
//     return;
//   }
//   console.log('Connection pool closed.');
// });