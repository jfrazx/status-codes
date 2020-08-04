import { mergeEnums } from './helpers';
import { Http } from './http';

export enum IIS {
  LoginTimeOut = 440,
  RetryWith = 449,
  Redirect = 451,
}

export const IISHttp = mergeEnums(Http, IIS);
