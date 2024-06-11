import express from 'express';
import { UserRoutes } from './routes/user-routes.js';
import { DatabaseConnection } from './database-connection.js';

export class ExpressServer {

  constructor(base_url) {
    this.app = express();
    this.app.use(express.json()); // for parsing POST body

    this.port = process.env.PORT || 3000;
    this.base_url = base_url;
  }

  setupRoutes = () => {
    console.log("Configuring http routes...")
    new UserRoutes(this.app, `${this.base_url}/users`);
  }

  start = () => {
    console.log('Starting database...');
    this.databaseConnection = new DatabaseConnection();
    
    console.log("Starting http server...")
    this.server = this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }

  shutdown = () => {
    console.log('Shutting down database...');
    try {
      this.databaseConnection.disconnect();
    } catch (err) {
      console.error('Error during database shutdown', err.stack);
      process.exit(1);
    }

    console.log('Shutting down http server...');
    try {
      this.server.close(() => {
        console.log('Http server closed');
        process.exit(0);
      });
    } catch (err) {
      console.error('Error during http server shutdown', err.stack);
      process.exit(1);
    }
  }
}