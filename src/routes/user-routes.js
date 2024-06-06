import { UserService } from '../services/user-service.js';

export class UserRoutes {
  constructor(expressApp, route) {
    this.app = expressApp;
    this.route = route;
    this.initRoutes();
  }

  initRoutes() {
    this.app.get(`${this.route}/`, (request, response) => {
      const userService = new UserService();
      response.status(200).send(userService.getAllUsers());
    });

    // this.app.get('/api/users', this.userController.getAllUsers.bind(this.userController));
    // this.app.get('/api/users/:id', this.userController.getUserById.bind(this.userController));
    // this.app.post('/api/users', this.userController.createUser.bind(this.userController));
    // this.app.put('/api/users/:id', this.userController.updateUser.bind(this.userController));
    // this.app.delete('/api/users/:id', this.userController.deleteUser.bind(this.userController));
  }
}
