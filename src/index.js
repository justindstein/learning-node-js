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

    // app.get("/", (request, response) => {
    //   response.status(200).send({msg: "Hello"});
    // })

    // app.get("/api/users", (request, response) => {
    //   const userService = new UserService();
    //   console.log(userService.getAllUsers());
    //   response.status(200).send(userService.getAllUsers());
    // })

    // app.get("/api/users/:id", (request, response) => {
    //   const parsedId = request.params.id;
    //   console.log(parsedId);
    //   if(isNaN(parsedId)) {
    //     response.status(400).send({msg: "Bad request. Invalid ID."});
    //   }

    //   const findUser = mockUsers.find((user) => user.id == parsedId);
    //   console.log(findUser);
    //   if(!findUser) {
    //     response.status(400).send({msg: "Bad request. User not found."});
    //   }

    //   response.status(200).send(findUser);
    // })
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
