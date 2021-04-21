import {ImageJsonld } from "./image-jsonld"

export interface ImageList {
  'hydra:member':Array<ImageJsonld>;
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