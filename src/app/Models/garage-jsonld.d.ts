export interface GarageJsonld{
    '@id': string,
    '@type': string,
    '@context': string,
    id: number,
    name: string,
    siret?: string,
    adresse?: string,
    postalcode?: string,
    town?: string,
    phone?: string,
    user: string,
    cars: [
      string
    ]
  }