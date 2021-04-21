import {AdminJsonld } from "./admin-jsonld"

export interface AdminList {
  'hydra:member':Array<AdminJsonld>;
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