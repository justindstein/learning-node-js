import mysql from 'mysql';
import { config } from './config.js';

export class DatabaseConnection {

  constructor() {
  }

  static getInstance = () => {
    if (!DatabaseConnection.instance) {
      const databaseConnection = new DatabaseConnection();
      databaseConnection.connect();
      DatabaseConnection.instance = databaseConnection;
    }
    return DatabaseConnection.instance;
  }

  connect = () => {
    this.pool = mysql.createPool({
      connectionLimit: config.database.connectionLimit,
      host: config.database.host,
      database: config.database.database,
      user: config.database.user,
      password: config.database.password
    });
  }

  disconnect = () => {
    return new Promise((resolve, reject) => {
      this.pool.end((error) => {
          if (error) {
              return reject(error);
          }
          console.log('Database connection pool closed');
          resolve();
      });
    });
  }

  getPool = () => {
    return this.pool;
  }
}