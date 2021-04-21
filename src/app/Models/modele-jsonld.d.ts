export interface ModeleJsonld {
    '@id': string,
    '@type': string,
    '@context': string,
    id: number,
    name: string,
    marque: string,
    cars: [
      string
    ]
  }