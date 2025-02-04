class User {
  constructor(
    firstName: string,
    lastname: string,
    email: string,
    password: string,
  ) {
    this.name = `${firstName.trim()} ${lastname.trim()}`;
    this.email = email.trim();
    this.password = password;
  }

  name: string;
  email: string;
  password: string;
}

export default User;
