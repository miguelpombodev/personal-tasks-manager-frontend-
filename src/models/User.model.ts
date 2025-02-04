import { UserResponse } from "../interfaces/responses/user.interface";

interface FormatUserReturnProps {
  firstName: string;
  lastName: string;
}

class User {
  constructor(user: UserResponse) {
    const userNames = this._formatUserFirstNameAndLastName(user.name);

    this.firstName = userNames.firstName;
    this.lastName = userNames.lastName;
    this.email = user.email;
    this.avatar = user?.avatar;
  }
  firstName: string;
  lastName: string;
  email: string;
  avatar: string | null;

  private _formatUserFirstNameAndLastName(name: string): FormatUserReturnProps {
    const splitUserName = name.split(" ");

    return {
      firstName: splitUserName[0],
      lastName: splitUserName[1],
    };
  }
}

export default User;
