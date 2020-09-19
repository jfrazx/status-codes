// https://support.cloudflare.com/hc/en-us/articles/115003011431-Troubleshooting-Cloudflare-5XX-errors
// https://support.cloudflare.com/hc/en-us/articles/360029779472-Troubleshooting-Cloudflare-1XXX-errors

import { mergeEnums } from './helpers';
import { Http } from './http';

export enum Cloudflare {
  /**
   * 5XX Errors
   */
  InternalServerError = 500,
  BadGateway = 502,
  ServiceTemporarilyAvailable = 503,
  GatewayTimeout = 504,
  UnknownError = 520,
  WebServerIsDown = 521,
  ConnectionTimedOut = 522,
  OriginIsUnreachable = 523,
  ATimeoutOccurred = 524,
  SslHandshakeFailed = 525,
  InvalidSslCertificate = 526,
  RailgunError = 527,
  DnsError = 530,

  /**
   * 1XXX Errors
   */
  DNSProhibitedIP = 1000,
  DNSResolutionError = 1001,
  Restricted = 1002,
  DirectIPAccessNotAllowed = 1003,
  HostNotConfigured = 1004,
  AccessDeniedIPBanned = 1006,
  AccessDeniedIPISBanned = 1007,
  AccessDeniedIPHasBeenBanned = 1008,
  WebsiteOwnerBannedBrowserAccess = 1010,
  AccessDeniedHotlinkingDenied = 1011,
  AccessDenied = 1012,
  HTTPHostnameTLSHostnameMismatch = 1013,
  CrossUserBanned = 1014,
  RateLimited = 1015,
  OriginDNSError = 1016,
  HostNotFound = 1018,
  ComputeServerError = 1019,
  Accessdenied = 1020,
  CheckBackLater = 1025,
  RenderingError = 1101,
  RenderError = 1102,
  CacheConnectionLimit = 1200,
}

export const CloudflareHttp = mergeEnums(Http, Cloudflare);
