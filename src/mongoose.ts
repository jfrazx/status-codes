/**
 * @see https://github.com/Automattic/mongoose/blob/master/lib/connectionstate.js
 */
export enum MongooseState {
  Disconnected,
  Connected,
  Connecting,
  Disconnecting,
  Uninitialized = 99,
}
