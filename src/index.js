import { ExpressServer } from './express-server.js';
import { config } from './config.js';

function initializeDatabaseConnection(base_url) {
}

function initializeExpressServer(base_url) {
  const expressServer = new ExpressServer(base_url);

  // Handle various exit events
  process.on('SIGTERM', expressServer.shutdown);
  process.on('SIGINT', expressServer.shutdown);
  // process.on('SIGUSR1', server.shutdown);
  process.on('SIGUSR2', expressServer.shutdown);
  process.on('uncaughtException', async (err) => {
    console.error('Uncaught Exception:', err.stack);
    await expressServer.shutdown();
  });

  expressServer.setupRoutes();
  expressServer.start();
}

initializeExpressServer(config.api.base_url);