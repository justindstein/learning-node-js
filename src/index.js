import express from 'express';
import { UserRoutes } from './routes/user-routes.js';

const app = express();
const PORT = process.env.PORT || 3000;
const API_ROUTE = '/api';

new UserRoutes(app, `${API_ROUTE}/users`);

// app.use('/api/users', new UserRoutes(app, null));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


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