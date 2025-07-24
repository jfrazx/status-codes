/**
 * @see https://firebase.google.com/docs/reference/node/firebase.auth.Error
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

/**
 * @see https://firebase.google.com/docs/auth/admin/errors
 */
export enum FirebaseAuthAdmin {
  ClaimsTooLarge = 'auth/claims-too-large',
  EmailAlreadyExists = 'auth/email-already-exists',
  IdTokenExpired = 'auth/id-token-expired',
  IdTokenRevoked = 'auth/id-token-revoked',
  InsufficientPermission = 'auth/insufficient-permission',
  InternalError = 'auth/internal-error',
  InvalidArgument = 'auth/invalid-argument',
  InvalidClaims = 'auth/invalid-claims',
  InvalidContinueUri = 'auth/invalid-continue-uri',
  InvalidCreationTime = 'auth/invalid-creation-time',
  InvalidCredential = 'auth/invalid-credential',
  InvalidDisabledField = 'auth/invalid-disabled-field',
  InvalidDisplayName = 'auth/invalid-display-name',
  InvalidDynamicLinkDomain = 'auth/invalid-dynamic-link-domain',
  InvalidEmail = 'auth/invalid-email',
  InvalidEmailVerified = 'auth/invalid-email-verified',
  InvalidHashAlgorithm = 'auth/invalid-hash-algorithm',
  InvalidHashBlockSize = 'auth/invalid-hash-block-size',
  InvalidHashDerivedKeyLength = 'auth/invalid-hash-derived-key-length',
  InvalidHashKey = 'auth/invalid-hash-key',
  InvalidHashMemoryCost = 'auth/invalid-hash-memory-cost',
  InvalidHashParallelization = 'auth/invalid-hash-parallelization',
  InvalidHashRounds = 'auth/invalid-hash-rounds',
  InvalidHashSaltSeparator = 'auth/invalid-hash-salt-separator',
  InvalidIdToken = 'auth/invalid-id-token',
  InvalidLastSignInTime = 'auth/invalid-last-sign-in-time',
  InvalidPageToken = 'auth/invalid-page-token',
  InvalidPassword = 'auth/invalid-password',
  InvalidPasswordHash = 'auth/invalid-password-hash',
  InvalidPasswordSalt = 'auth/invalid-password-salt',
  InvalidPhoneNumber = 'auth/invalid-phone-number',
  InvalidPhotoUrl = 'auth/invalid-photo-url',
  InvalidProviderData = 'auth/invalid-provider-data',
  InvalidProviderId = 'auth/invalid-provider-id',
  InvalidOauthResponsetype = 'auth/invalid-oauth-responsetype',
  InvalidSessionCookieDuration = 'auth/invalid-session-cookie-duration',
  InvalidUid = 'auth/invalid-uid',
  InvalidUserImport = 'auth/invalid-user-import',
  MaximumUserCountExceeded = 'auth/maximum-user-count-exceeded',
  MissingAndroidPkgName = 'auth/missing-android-pkg-name',
  MissingContinueUri = 'auth/missing-continue-uri',
  MissingHashAlgorithm = 'auth/missing-hash-algorithm',
  MissingIosBundleId = 'auth/missing-ios-bundle-id',
  MissingUid = 'auth/missing-uid',
  MissingOauthClientSecret = 'auth/missing-oauth-client-secret',
  PhoneNumberAlreadyExists = 'auth/phone-number-already-exists',
  ProjectNotFound = 'auth/project-not-found',
  ReservedClaims = 'auth/reserved-claims',
  SessionCookieExpired = 'auth/session-cookie-expired',
  SessionCookieRevoked = 'auth/session-cookie-revoked',
  UidAlreadyExists = 'auth/uid-already-exists',
  UnauthorizedContinueUri = 'auth/unauthorized-continue-uri',
  UserNotFound = 'auth/user-not-found',
}

/**
 * Firebase Cloud Messaging REST API Error Codes (HTTP v1 API)
 * @see https://firebase.google.com/docs/cloud-messaging/error-codes
 */
export enum FCMRestError {
  UnspecifiedError = 'UNSPECIFIED_ERROR',
  InvalidArgument = 'INVALID_ARGUMENT',
  Unregistered = 'UNREGISTERED',
  SenderIdMismatch = 'SENDER_ID_MISMATCH',
  QuotaExceeded = 'QUOTA_EXCEEDED',
  Unavailable = 'UNAVAILABLE',
  Internal = 'INTERNAL',
  ThirdPartyAuthError = 'THIRD_PARTY_AUTH_ERROR',
}

/**
 * Firebase Cloud Messaging Admin SDK Error Codes
 * @see https://firebase.google.com/docs/cloud-messaging/error-codes#admin_sdk_error_codes
 */
export enum FCMAdminError {
  InvalidArgument = 'messaging/invalid-argument',
  InvalidRecipient = 'messaging/invalid-recipient',
  InvalidPayload = 'messaging/invalid-payload',
  InvalidDataPayloadKey = 'messaging/invalid-data-payload-key',
  PayloadSizeLimitExceeded = 'messaging/payload-size-limit-exceeded',
  InvalidOptions = 'messaging/invalid-options',
  InvalidRegistrationToken = 'messaging/invalid-registration-token',
  RegistrationTokenNotRegistered = 'messaging/registration-token-not-registered',
  InvalidPackageName = 'messaging/invalid-package-name',
  MessageRateExceeded = 'messaging/message-rate-exceeded',
  DeviceMessageRateExceeded = 'messaging/device-message-rate-exceeded',
  TopicsMessageRateExceeded = 'messaging/topics-message-rate-exceeded',
  TooManyTopics = 'messaging/too-many-topics',
  InvalidApnsCredentials = 'messaging/invalid-apns-credentials',
  MismatchedCredential = 'messaging/mismatched-credential',
  AuthenticationError = 'messaging/authentication-error',
  ServerUnavailable = 'messaging/server-unavailable',
  InternalError = 'messaging/internal-error',
  UnknownError = 'messaging/unknown-error',
}

/**
 * Firebase Analytics Error Codes
 * @see https://firebase.google.com/docs/analytics/errors
 */
export enum FirebaseAnalyticsError {
  /**
   * Event name is invalid (empty, too long, invalid characters)
   * Result: Event is ignored and firebase_error event is logged
   */
  InvalidEventName = 2,

  /**
   * Event parameter name is invalid (empty, too long, invalid characters)
   * Result: Parameter is replaced with firebase_error parameter
   */
  InvalidEventParameterName = 3,

  /**
   * Event parameter value is too long
   * Result: Invalid parameter is dropped
   */
  EventParameterValueTooLong = 4,

  /**
   * Event has more than 25 parameters
   * Result: Extra event parameters are dropped
   */
  EventParameterCountExceeded = 5,

  /**
   * User property name is invalid (empty, too long, invalid characters)
   * Result: User property change is ignored
   */
  InvalidUserPropertyName = 6,

  /**
   * User property value is too long
   * Result: User property change is ignored
   */
  UserPropertyValueTooLong = 7,

  /**
   * App Instance logs more than 500 unique event types
   * Result: Extra events are dropped
   */
  UniqueEventTypeLimitExceeded = 8,

  /**
   * App Instance sets more than 25 unique user properties
   * Result: User property change is ignored
   */
  UniqueUserPropertyLimitExceeded = 9,

  /**
   * App Instance exceeds conversion event limit in a single day
   * Result: Event is logged as non-conversion event
   */
  DailyConversionEventLimitExceeded = 10,

  /**
   * App Instance logs blacklisted event
   * Result: Event is ignored
   */
  BlacklistedEventName = 11,

  /**
   * App Instance sets blacklisted user property
   * Result: User property change is ignored
   */
  BlacklistedUserProperty = 12,

  /**
   * Event name is reserved
   * Result: Event is ignored
   */
  ReservedEventName = 13,

  /**
   * Event parameter name is reserved
   * Result: Parameter is replaced with firebase_error parameter
   */
  ReservedParameterName = 14,

  /**
   * User property name is reserved
   * Result: User property change is ignored
   */
  ReservedUserPropertyName = 15,

  /**
   * Parameter array length exceeds limit (200)
   * Result: Array parameter is truncated to 200 items
   */
  ArrayLengthExceeded = 17,

  /**
   * Invalid value parameter type
   * Result: Value parameter is dropped
   */
  InvalidValueParameterType = 18,

  /**
   * Missing currency parameter on a conversion event
   * Result: Value parameter is dropped
   */
  MissingCurrencyParameter = 19,

  /**
   * Event array parameter name is invalid
   * Result: Parameter is replaced with firebase_error parameter
   */
  InvalidArrayParameterName = 20,

  /**
   * Event does not support array parameters
   * Result: Parameter is replaced with firebase_error parameter
   */
  ArrayParametersNotSupported = 21,

  /**
   * Item cannot contain an array-based parameter
   * Result: Nested array parameter is replaced with firebase_error parameter
   */
  ItemNestedArrayNotAllowed = 22,

  /**
   * Item cannot contain custom parameters
   * Result: Custom array parameters are dropped
   */
  ItemCustomParametersNotAllowed = 23,

  /**
   * Item array not supported on client's version of Google Play Services (Android Only)
   * Result: Array parameters are dropped
   */
  ItemArrayNotSupported_Android = 25,

  /**
   * Item has more than 27 custom parameters
   * Result: Extra item parameters are dropped
   */
  ItemParameterCountExceeded = 28,
}
