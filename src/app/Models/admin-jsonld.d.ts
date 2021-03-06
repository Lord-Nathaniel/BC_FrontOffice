export interface AdminJsonld {
    '@id': string,
    '@type': string,
    '@context': string,
    id: number,
    email: string,
    roles: [
      string
    ],
    password: string,
    firstname?: string,
    lastname?: string,
    username: string,
    salt?: string
  }