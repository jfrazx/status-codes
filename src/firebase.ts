/**
 * @see https://firebase.google.com/docs/reference/js/firebase.auth.Error
 */
export enum FirebaseAuth {
  AppDeleted = 'auth/app-deleted',
  NotAuthorized = 'auth/app-not-authorized',
  ArgumentError = 'auth/argument-error',
  InvalidApiKey = 'auth/invalid-api-key',
  InvalidTenantId = 'auth/invalid-tenant-id',
  InvalidUserToken = 'auth/invalid-user-token',
  NetworkRequestFailed = 'auth/network-request-failed',
  OperationNotAllowed = 'auth/operation-not-allowed',
  RequiresRecentLogin = 'auth/requires-recent-login',
  TooManyRequests = 'auth/too-many-requests',
  UnauthorizedDomain = 'auth/unauthorized-domain',
  UserDisabled = 'auth/user-disabled',
  UserTokenExpired = 'auth/user-token-expired',
  WebStorageUnsupported = 'auth/web-storage-unsupported',
}
