export interface GarageListFilter {
    name: string,
    siret: string,
    adresse: string,
    postalcode: string,
    town: string,
    phone: string,
    user: string,
    cars: [
      string
    ]
  }