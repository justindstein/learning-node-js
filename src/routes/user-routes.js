import { UserService } from '../services/user-service.js';

export class UserRoutes {
  constructor(expressApp, route) {
    this.app = expressApp;
    this.route = route;
    this.userService = new UserService();
    this.initRoutes();
  }

  initRoutes() {
    this.app.get(`${this.route}`, (request, response) => {
      response.status(200).send(this.userService.getAllUsers());
    });

    this.app.get(`${this.route}/:id`, (request, response) => {
      const parsedId = request.params.id;
      response.status(200).send(this.userService.getUserById(parsedId));
    });

    this.app.post(`${this.route}`, (request, response) => {
      console.log(request.body)
      response.status(200).send(this.userService.createUser("firstName","lastName","username"));
    });

    // this.app.get('/api/users', this.userController.getAllUsers.bind(this.userController));
    // this.app.get('/api/users/:id', this.userController.getUserById.bind(this.userController));
    // this.app.post('/api/users', this.userController.createUser.bind(this.userController));
    // this.app.put('/api/users/:id', this.userController.updateUser.bind(this.userController));
    // this.app.delete('/api/users/:id', this.userController.deleteUser.bind(this.userController));
  }
}
