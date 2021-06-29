export interface UserListFilter {
    email: string,
    roles: Array<string>,
    password: string,
    garages: Array<string>,
    firstname: string,
    lastname: string,
    username: string,
    salt: string
  }