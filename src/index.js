import express from 'express';
import { UserRoutes } from './routes/user-routes.js';

export class Server {
  constructor() {
    this.app = express();
    this.app.use(express.json()); // for parsing POST body

    this.port = process.env.PORT || 3000;
    this.api_route = '/api';
  }

  setupRoutes() {
    new UserRoutes(this.app, `${this.api_route}/users`);
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
