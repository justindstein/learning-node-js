export class UserService {
  constructor() {
    this.mockUsers = [
      {id: 1, firstName: "John", lastName: "Smith", username: "jsmith"},
      {id: 2, firstName: "Jane", lastName: "Doe", username: "jdoe"},
      {id: 3, firstName: "Michael", lastName: "Johnson", username: "mjohnson"},
      {id: 4, firstName: "Emily", lastName: "Davis", username: "edavis"},
      {id: 5, firstName: "David", lastName: "Martinez", username: "dmartinez"},
      {id: 6, firstName: "Sarah", lastName: "Brown", username: "sbrown"},
      {id: 7, firstName: "Chris", lastName: "Wilson", username: "cwilson"},
      {id: 8, firstName: "Laura", lastName: "Moore", username: "lmoore"},
      {id: 9, firstName: "James", lastName: "Taylor", username: "jtaylor"},
      {id: 10, firstName: "Lisa", lastName: "Anderson", username: "landerson"},
      {id: 11, firstName: "Robert", lastName: "Thomas", username: "rthomas"}
    ];
  }

  createUser = (firstName, lastName, username) => {
    const user = {id: 100, firstName: firstName, lastName: lastName, username: username};
    this.mockUsers.push(user)
    return user;
  }

  // async getAllUsers() {
  getUsers = () => {
    // return await this.userRepository.getAllUsers();
    return this.mockUsers;
  }

  getUser = (id) => {
    return this.mockUsers.find((user) => user.id == id);
  }

  updateUser = (id, firstName, lastName, username) => {
    const index = this.mockUsers.findIndex(user => user.id === id);
    this.mockUsers[index].firstName = firstName;
    this.mockUsers[index].lastName = lastName;
    this.mockUsers[index].username = username;
  }

  deleteUser = (id) => {
    const index = this.mockUsers.findIndex(user => user.id === id);
    this.mockUsers.splice(index, 1);
  }


}