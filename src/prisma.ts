/**
 * @see https://www.prisma.io/docs/orm/reference/error-reference#error-codes
 */
export enum PrismaError {
  // ─── Common ───────────────────────────────────────────────────────────────

  /** Authentication failed against database server at {host}; credentials for {user} are not valid. */
  AuthenticationFailed = 'P1000',

  /** Can't reach database server at {host}:{port}. */
  DatabaseUnreachable = 'P1001',

  /** Database server at {host}:{port} was reached but timed out. */
  DatabaseConnectionTimeout = 'P1002',

  /** Database {name} does not exist at the given path or on the database server. */
  DatabaseDoesNotExist = 'P1003',

  /** Operations timed out after {time}. */
  OperationTimeout = 'P1008',

  /** Database {name} already exists on the database server at {host}:{port}. */
  DatabaseAlreadyExists = 'P1009',

  /** User {user} was denied access on the database {name}. */
  DatabaseAccessDenied = 'P1010',

  /** Error opening a TLS connection: {message}. */
  TlsConnectionError = 'P1011',

  /** Schema validation error — argument missing, type invalid, duplicate definition, unknown attribute, etc. */
  SchemaValidationError = 'P1012',

  /** The provided database connection string is invalid. */
  InvalidDatabaseString = 'P1013',

  /** The underlying {kind} for model {model} does not exist. */
  UnderlyingModelNotFound = 'P1014',

  /** Schema uses features not supported by the current database version. */
  UnsupportedDatabaseFeatures = 'P1015',

  /** Raw query had an incorrect number of parameters. Expected: {expected}, actual: {actual}. */
  RawQueryParameterCountMismatch = 'P1016',

  /** Server has closed the connection. */
  ServerClosedConnection = 'P1017',

  // ─── Prisma Client / Query Engine ─────────────────────────────────────────

  /** The provided value for column {column} is too long for the column's type. */
  ValueTooLongForColumn = 'P2000',

  /** Record searched for in the where condition does not exist. */
  RecordNotFound = 'P2001',

  /** Unique constraint failed on {constraint}. */
  UniqueConstraintViolation = 'P2002',

  /** Foreign key constraint failed on field: {field}. */
  ForeignKeyConstraintViolation = 'P2003',

  /** A constraint failed on the database: {error}. */
  ConstraintViolation = 'P2004',

  /** Value stored in the database for field {field} is invalid for the field's type. */
  InvalidStoredValue = 'P2005',

  /** The provided value {value} for {model} field {field} is not valid. */
  InvalidFieldValue = 'P2006',

  /** Data validation error: {error}. */
  DataValidationError = 'P2007',

  /** Failed to parse the query {error} at {position}. */
  QueryParseError = 'P2008',

  /** Failed to validate the query: {error} at {position}. */
  QueryValidationError = 'P2009',

  /** Raw query failed. Code: {code}. Message: {message}. */
  RawQueryFailed = 'P2010',

  /** Null constraint violation on {constraint}. */
  NullConstraintViolation = 'P2011',

  /** Missing a required value at {path}. */
  MissingRequiredValue = 'P2012',

  /** Missing required argument {argument} for field {field} on {object}. */
  MissingRequiredArgument = 'P2013',

  /** Change would violate the required relation '{relation}' between {modelA} and {modelB}. */
  RequiredRelationViolation = 'P2014',

  /** A related record could not be found: {details}. */
  RelatedRecordNotFound = 'P2015',

  /** Query interpretation error: {details}. */
  QueryInterpretationError = 'P2016',

  /** Records for relation {relation} between {parent} and {child} models are not connected. */
  RelationRecordsNotConnected = 'P2017',

  /** The required connected records were not found: {details}. */
  RequiredConnectedRecordsNotFound = 'P2018',

  /** Input error: {details}. */
  InputError = 'P2019',

  /** Value out of range for the type: {details}. */
  ValueOutOfRange = 'P2020',

  /** Table {table} does not exist in the current database. */
  TableDoesNotExist = 'P2021',

  /** Column {column} does not exist in the current database. */
  ColumnDoesNotExist = 'P2022',

  /** Inconsistent column data: {message}. */
  InconsistentColumnData = 'P2023',

  /** Timed out fetching a new connection from the connection pool. */
  ConnectionPoolTimeout = 'P2024',

  /** An operation failed because it depends on one or more records that were required but not found. */
  DependentRecordNotFound = 'P2025',

  /** The current database provider doesn't support a feature that the query used: {feature}. */
  UnsupportedQueryFeature = 'P2026',

  /** Multiple errors occurred on the database during query execution. */
  MultipleQueryErrors = 'P2027',

  /** Transaction API error: {error}. */
  TransactionApiError = 'P2028',

  /** Query parameter limit exceeded: {message}. */
  QueryParameterLimitExceeded = 'P2029',

  /** Cannot find a fulltext index to use for the search; try adding @@fulltext([Fields...]) to your schema. */
  FullTextIndexNotFound = 'P2030',

  /** Prisma needs to perform transactions, which requires your MongoDB server to be run as a replica set. */
  MongoDbReplicaSetRequired = 'P2031',

  /** A number used in the query does not fit into a 64-bit signed integer. Consider using BigInt. */
  NumberOutOf64BitRange = 'P2033',

  /** Transaction failed due to a write conflict or a deadlock. Please retry your transaction. */
  TransactionWriteConflict = 'P2034',

  /** Assertion violation on the database: {error}. */
  AssertionViolation = 'P2035',

  /** Error in external connector (id {id}). */
  ExternalConnectorError = 'P2036',

  /** Too many database connections opened: {message}. */
  TooManyDatabaseConnections = 'P2037',

  // ─── Prisma Migrate / Schema Engine ───────────────────────────────────────

  /** Failed to create database: {error}. */
  MigrationCreateDatabaseFailed = 'P3000',

  /** Migration possible with destructive changes and possible data loss. */
  MigrationDestructiveChanges = 'P3001',

  /** The attempted migration was rolled back: {error}. */
  MigrationRolledBack = 'P3002',

  /** The format of migrations changed; saved migrations are no longer valid. */
  MigrationFormatChanged = 'P3003',

  /** The database is a system database and should not be altered with prisma migrate. */
  SystemDatabaseMigration = 'P3004',

  /** The database schema is not empty. Baseline an existing production database before migrating. */
  NonEmptySchemaForMigration = 'P3005',

  /** Migration {name} failed to apply cleanly to the shadow database. */
  ShadowDatabaseMigrationFailed = 'P3006',

  /** Requested preview features are not yet allowed in the schema engine. */
  PreviewFeaturesNotAllowed = 'P3007',

  /** Migration {name} is already recorded as applied in the database. */
  MigrationAlreadyApplied = 'P3008',

  /** Failed migrations found in target database; new migrations will not be applied. */
  FailedMigrationsFound = 'P3009',

  /** Migration name exceeds the 200-character limit. */
  MigrationNameTooLong = 'P3010',

  /** Migration {name} cannot be rolled back because it was never applied to the database. */
  MigrationNeverApplied = 'P3011',

  /** Migration {name} cannot be rolled back because it is not in a failed state. */
  MigrationNotInFailedState = 'P3012',

  /** Datasource provider arrays are no longer supported in migrate; use a single provider. */
  MultipleProvidersNotSupported = 'P3013',

  /** Prisma Migrate could not create the shadow database; user may lack CREATE DATABASE permission. */
  ShadowDatabaseCreationFailed = 'P3014',

  /** Could not find the migration file at {path}. Delete the directory or restore the file. */
  MigrationFileNotFound = 'P3015',

  /** The fallback method for database resets failed; could not clean up the database entirely. */
  DatabaseResetFailed = 'P3016',

  /** Migration {name} could not be found. */
  MigrationNotFound = 'P3017',

  /** A migration failed to apply; resolve the error before applying new migrations. */
  MigrationApplyFailed = 'P3018',

  /** Datasource provider in schema does not match migration_lock.toml; reset migration history. */
  DatasourceProviderMismatch = 'P3019',

  /** Automatic creation of shadow databases is disabled on Azure SQL; set shadowDatabaseUrl manually. */
  AzureShadowDatabaseNotSupported = 'P3020',

  /** Foreign keys cannot be created on this database. */
  ForeignKeysNotSupported = 'P3021',

  /** Direct execution of DDL SQL statements is disabled on this database. */
  DirectDdlNotSupported = 'P3022',

  /** externalTables & externalEnums must contain only fully qualified identifiers (schema_name.table_name). */
  UnqualifiedExternalIdentifiers = 'P3023',

  /** externalTables & externalEnums must contain only simple identifiers without a schema name. */
  QualifiedExternalIdentifiersNotAllowed = 'P3024',

  // ─── Prisma DB Pull ───────────────────────────────────────────────────────

  /** Introspection operation failed to produce a schema file: {error}. */
  IntrospectionFailed = 'P4000',

  /** The introspected database was empty. */
  IntrospectedDatabaseEmpty = 'P4001',

  /** The schema of the introspected database was inconsistent: {explanation}. */
  IntrospectedSchemaInconsistent = 'P4002',

  // ─── Prisma Accelerate ────────────────────────────────────────────────────

  /** An unknown server error occurred. */
  AccelerateServerError = 'P6000',

  /** The URL is malformed; for instance, it does not use the prisma:// protocol. */
  AccelerateInvalidDataSource = 'P6001',

  /** The API key in the connection string is invalid. */
  AccelerateUnauthorized = 'P6002',

  /** The included usage of the current plan has been exceeded (free plan only). */
  AcceleratePlanLimitReached = 'P6003',

  /** The global timeout of Accelerate has been exceeded. */
  AccelerateQueryTimeout = 'P6004',

  /** The user supplied invalid parameters (e.g., a transaction timeout that is too high). */
  AccelerateInvalidParameters = 'P6005',

  /** The chosen Prisma version is not compatible with Accelerate. */
  AccelerateVersionNotSupported = 'P6006',

  /** The engine failed to start (e.g., couldn't establish a connection to the database). */
  AccelerateEngineStartError = 'P6008',

  /** The global response size limit of Accelerate has been exceeded. */
  AccelerateResponseSizeLimitExceeded = 'P6009',

  /** Your Accelerate project is disabled; re-enable it to continue using it. */
  AccelerateProjectDisabled = 'P6010',

  /** Request volume exceeded; implement a back-off strategy and retry later. */
  AccelerateTooManyRequests = 'P5011',
}
