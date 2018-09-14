import { mergeEnums } from './helpers';
import { Http } from './http';

export enum Cloudflare {
  UnknownError = 520,
  WebServerIsDown = 521,
  ConnectionTimedOut = 522,
  OriginIsUnreachable = 523,
  ATimeoutOccurred = 524,
  SslHandshakeFailed = 525,
  InvalidSslCertificate = 526,
  RailgunError = 527,
  OriginDnsError = 530,
}

export const CloudflareHttp = mergeEnums(Http, Cloudflare);
