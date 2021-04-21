export interface AdminJsonld{
    '@context': string;
    '@id': string;
    '@type': string;
    id: number;
    name: string,
    logoUrl: string,
    modeles: [
    string
    ],
    isCommon: boolean
  }