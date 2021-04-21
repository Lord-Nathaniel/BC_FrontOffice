import {EnergyJsonld } from "./energy-jsonld"

export interface EnergyList {
  'hydra:member':Array<EnergyJsonld>;
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