export class User {

  constructor(userId, userName, firstName, lastName, isActive) {
    this.userId = userId;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isActive = Boolean(isActive);
  }

  static parseQueryResults = (results) => {
    console.log("results: " + results)

    let parsedQueryResults = [];
    results.forEach(row => {
      parsedQueryResults.push(new User(row.user_id, row.user_name, row.first_name, row.last_name, row.is_active));
    });
    return parsedQueryResults;
    // TODO: 
    // return results.map(row => new User(row));
  }

  toString = () => {
    return `{ userId: ${this.userId}, userName: "${this.userName}", firstName: "${this.firstName}", lastName: "${this.lastName}", isActive: ${this.isActive} }`;
  }
}
