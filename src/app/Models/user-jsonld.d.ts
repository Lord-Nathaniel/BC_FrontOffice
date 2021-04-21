export interface UserJsonld {
    '@id': string,
    '@type': string,
    '@context': string,
    id: number,
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