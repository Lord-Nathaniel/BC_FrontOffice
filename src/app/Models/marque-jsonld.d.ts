export interface MarqueJsonld{
    '@id': string;
    '@type': string;
    '@context': string;
    id: number;
    name: string,
    logoUrl?: string,
    modeles: [
    string
    ],
    isCommon?: boolean
  }