import { mergeEnums } from './helpers';
import { HTTP } from './http';

export enum IIS {
  LOGIN_TIME_OUT = 440,
  RETRY_WITH = 449,
  REDIRECT = 451,
}

export const IIS_HTTP = mergeEnums(HTTP, IIS);
