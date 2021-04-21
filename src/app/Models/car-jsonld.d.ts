export interface CarJsonld {
    '@id': string,
    '@type': string,
    '@context': string,
    id: number,
    name: string,
    description?: string,
    adDate: string,
    price?: string,
    km?: string,
    year?: string,
    isSold: boolean,
    modele: string,
    garage: string,
    energy: string,
    images: [
      string
    ]
  }