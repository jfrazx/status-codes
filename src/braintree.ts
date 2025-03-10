/**
 * @see https://articles.braintreepayments.com/control-panel/transactions/declines#authorization-decline-codes
 */
export enum Braintree {
  DoNotHonor = 2000,
  InsufficientFunds = 2001,
  LimitExceeded = 2002,
  CardholdersActivityLimitExceeded = 2003,
  ExpiredCard = 2004,
  InvalidCreditCardNumber = 2005,
  InvalidExpirationDate = 2006,
  NoAccount = 2007,
  CreditCardLengthError = 2008,
  NoSuchIssuer = 2009,
  CardIssuerDeclinedCVV = 2010,
  VoiceAuthorizationRequired = 2011,
  ProcessorDeclinedPossibleLostCard = 2012,
  ProcessorDeclinedPossibleStolenCard = 2013,
  ProcessorDeclinedFraudSuspected = 2014,
  TransactionNotAllowed = 2015,
  DuplicateTransaction = 2016,
  CardholderStoppedBilling = 2017,
  CardholderStoppedAllBilling = 2018,
  InvalidTransaction = 2019,
  Violation = 2020,
  SecurityViolation = 2021,
  DeclinedUpdatedCardholderAvailable = 2022,
  ProcessorDoesNotSupportThisFeature = 2023,
  CardTypeNotEnabled = 2024,
  SetUpErrorMerchant = 2025,
  InvalidMerchantID = 2026,
  SetUpErrorAmount = 2027,
  SetUpErrorHierarchy = 2028,
  SetUpErrorCard = 2029,
  SetUpErrorTerminal = 2030,
  EncryptionError = 2031,
  SurchargeNotPermitted = 2032,
  InconsistentData = 2033,
  NoActionTaken = 2034,
  PartialApprovalForAmountInGroupIIIVersion = 2035,
  AuthorizationCouldNotBeFound = 2036,
  AlreadyReversed = 2037,
  ProcessorDeclined = 2038,
  InvalidAuthorizationCode = 2039,
  InvalidStore = 2040,
  DeclinedCallForApproval = 2041,
  InvalidClientID = 2042,
  ErrorDoNotRetryCallIssuer = 2043,
  DeclinedCallIssuer = 2044,
  InvalidMerchantNumber = 2045,
  Declined = 2046,
  CallIssuerPickUpCard = 2047,
  InvalidAmount = 2048,
  InvalidSkuNumber = 2049,
  InvalidCreditPlan = 2050,
  CreditCardNumberDoesNotMatchMethodOfPayment = 2051,
  CardReportedAsLostOrStolen = 2053,
  ReversalAmountDoesNotMatchAuthorizationAmount = 2054,
  InvalidTransactionDivisionNumber = 2055,
  TransactionAmountExceedsTheTransactionDivisionLimit = 2056,
  IssuerOrCardholderHasPutARestrictionOnTheCard = 2057,
  MerchantNotMastercardSecureCodeEnabled = 2058,
  AddressVerificationFailed = 2059,
  AddressVerificationAndCardSecurityCodeFailed = 2060,
  InvalidTransactionData = 2061,
  InvalidTaxAmount = 2062,
  PaypalBusinessAccountPreferenceResultedInTheTransactionFailing = 2063,
  InvalidCurrencyCode = 2064,
  RefundTimeLimitExceeded = 2065,
  PaypalBusinessAccountRestricted = 2066,
  AuthorizationExpired = 2067,
  PaypalBusinessAccountLockedOrClosed = 2068,
  PaypalBlockingDuplicateOrderIds = 2069,
  PaypalBuyerRevokedFuturePaymentAuthorization = 2070,
  PaypalPayeeAccountInvalidOrDoesNotHaveAConfirmedEmail = 2071,
  PaypalPayeeEmailIncorrectlyFormatted = 2072,
  PaypalValidationError = 2073,
  FundingInstrumentInThePaypalAccountWasDeclinedByTheProcessorOrBank = 2074,
  PayerAccountIsLockedOrClosed = 2075,
  PayerCannotPayForThisTransactionWithPaypal = 2076,
  TransactionRefusedDueToPaypalRiskModel = 2077,
  PaypalMerchantAccountConfigurationError = 2079,
  PaypalPendingPaymentsAreNotSupported = 2081,
  PaypalDomesticTransactionRequired = 2082,
  PaypalPhoneNumberRequired = 2083,
  PaypalTaxInfoRequired = 2084,
  PaypalPayeeBlockedTransaction = 2085,
  PaypalTransactionLimitExceeded = 2086,
  PaypalReferenceTransactionsNotEnabledForYourAccount = 2087,
  CurrencyNotEnabledForYourPaypalSellerAccount = 2088,
  PaypalPayeeEmailPermissionDeniedForThisRequest = 2089,
  PaypalAccountNotConfiguredToRefundMoreThanSettledAmount = 2090,
  CurrencyOfThisTransactionMustMatchCurrencyOfYourPaypalAccount = 2091,
  NoDataFoundTryAnotherVerificationMethod = 2092,
  PaypalPaymentMethodInvalid = 2093,
  PaypalPaymentAlreadyCompleted = 2094,
  PaypalRefundNotAllowedAfterPartialRefund = 2095,
  PaypalBuyerAccountCantBeSameAsSellerAccount = 2096,
  PaypalAuthorizationAmountLimitExceeded = 2097,
  PaypalAuthorizationCountLimitExceeded = 2098,
  CardholderAuthenticationRequired = 2099,
  PaypalChannelInitiatedBillingNotEnabled = 2100,
  ProcessorDeclinedRangeStart = 2101,
  ProcessorDeclinedRangeEnd = 2999,
  ProcessorNetworkUnavailableTryAgain = 3000,
  SettlementDeclined = 4001,
  AlreadyCaptured = 4003,
  AlreadyRefunded = 4004,
  PaypalRiskRejected = 4005,
  CaptureAmountExceededAllowableLimit = 4006,
  PaypalPendingPaymentsNotSupported = 4018,
  PaypalRefundTransactionWithOpenCaseNotAllowed = 4019,
  PaypalRefundAttemptLimitReached = 4020,
  PaypalRefundTransactionNotAllowed = 4021,
  PaypalRefundInvalidPartialAmount = 4022,
  PaypalRefundMerchantAccountMissingACH = 4023,
}
