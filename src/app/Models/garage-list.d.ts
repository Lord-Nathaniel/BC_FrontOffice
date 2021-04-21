import {GarageJsonld } from "./garage-jsonld"

export interface GarageList {
  'hydra:member':Array<GarageJsonld>;
  'hydra:totalItems': number;
  'hydra:view': {
    '@id': string;
    '@type': string;
    'hydra:first': string;
    'hydra:last': string;
    'hydra:next'?: string;
    'hydra:previous'?: string;
  }
}