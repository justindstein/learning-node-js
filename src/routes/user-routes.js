import { UserService } from '../services/user-service.js';

export class UserRoutes {
  constructor(expressApp, route) {
    this.app = expressApp;
    this.route = route;
    this.userService = new UserService();
    this.initRoutes();
  }

  initRoutes = () => {
    this.app.post(`${this.route}`, (request, response) => {
      response.status(200).send(
        this.userService.createUser(request.body.firstName, request.body.lastName, request.body.username)
      );
    });

    this.app.get(`${this.route}`, (request, response) => {
      response.status(200).send(
        this.userService.getUsers()
      );
    });

    this.app.get(`${this.route}/:id`, (request, response) => {
      response.status(200).send(
        this.userService.getUser(request.params.id)
      );
    });

    this.app.put(`${this.route}/:id`, (request, response) => {
      response.status(200).send(
        this.userService.updateUser(request.params.id)
      );
    });

    this.app.delete(`${this.route}/:id`, (request, response) => {
      response.status(200).send(
        this.userService.deleteUser(request.params.id)
      );
    });
  }
}
