import { mergeEnums } from './helpers';
import { IANA } from './http';

enum IIS_STATUS {
  LOGIN_TIME_OUT = 440,
  RETRY_WITH = 449,
  REDIRECT = 451,
}

export const IIS = mergeEnums(IANA, IIS_STATUS);
