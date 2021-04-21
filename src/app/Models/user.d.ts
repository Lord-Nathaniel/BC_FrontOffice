export interface User {
    email: string,
    roles: [
      string
    ],
    password: string,
    garages: [
      string
    ],
    firstname?: string,
    lastname?: string,
    username: string,
    salt?: string
  }