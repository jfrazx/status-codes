import { expect } from 'chai';
import { mergeEnums } from '../src/helpers';
import {
  Apache,
  Auth0,
  Braintree,
  Cloudflare,
  CloudflareHttp,
  FirebaseAuth,
  FTP,
  Http,
  IIS,
  IRC,
  Mocha,
  MongoDB,
  MongoDBExit,
  MongooseState,
  Nginx,
  Node,
  PG,
  TwitterHttp,
  TwitterErrors,
} from '../src';

enum Move {
  Forward,
  Backward,
  Left,
  Right,
}

enum Pets {
  Cat = 6,
  Dog = 23,
  Fish = 49,
  Wombat = 100,
  Crab,
}

enum Color {
  Green,
  Red = 6,
  Yellow,
  Blue = 2,
}

describe('Status Codes', () => {
  describe('Merge Enums', () => {
    it('should combine two enums', () => {
      const len1 = Object.keys(Move).length;
      const len2 = Object.keys(Pets).length;

      expect(len1).to.equal(8);
      expect(len2).to.equal(10);

      const merged = mergeEnums(Move, Pets);
      const len3 = Object.keys(merged).length;

      expect(merged.Crab).to.equal(101);
      expect(merged.Forward).to.equal(0);
      expect(len3).to.equal(len1 + len2);
    });

    it('should overwrite duplicate keys, but not the associated values', () => {
      const len1 = Object.keys(Move).length;
      const len2 = Object.keys(Color).length;

      expect(len1).to.equal(8);
      expect(len2).to.equal(8);

      const merged = mergeEnums(Move, Color);

      expect(merged.Forward).to.equal(merged.Green);
      expect(merged[0]).to.equal('Green');
      expect(merged[0]).to.not.equal('Forward');
      expect(merged.Left).to.equal(merged.Blue);
      expect(merged[2]).to.equal('Blue');
      expect(merged[2]).to.not.equal('Left');

      expect(Object.keys(merged)).to.have.length(14);
    });

    it('should combine Cloudflare and Http enums', () => {
      expect(CloudflareHttp.Ok).to.equal(200);
      expect(CloudflareHttp.InternalServerError).to.equal(500);
      expect(CloudflareHttp.ServiceTemporarilyAvailable).to.equal(503);
      expect(CloudflareHttp.DNSProhibitedIP).to.equal(1000);
      expect(CloudflareHttp.CacheConnectionLimit).to.equal(1200);
    });
  });

  describe('Enums', () => {
    it('should have Apache statuses', () => {
      expect(Apache.InternalServerError).to.equal(500);
      expect(Apache.Created).to.equal(201);
    });

    it('should have Auth0 statuses', () => {
      expect(Auth0.Unauthorized).to.equal(401);
      expect(Auth0.ServiceUnavailable).to.equal(503);
    });

    it('should have Braintree statuses', () => {
      expect(Braintree.AlreadyRefunded).to.equal(4004);
      expect(Braintree.ProcessorDeclinedPossibleStolenCard).to.equal(2013);
    });

    it('should have Cloudflare statuses', () => {
      expect(Cloudflare.InvalidSslCertificate).to.equal(526);
      expect(Cloudflare.OriginIsUnreachable).to.equal(523);
    });

    it('should have Firebase Auth statuses', () => {
      expect(FirebaseAuth.InvalidUserToken).to.equal('auth/invalid-user-token');
      expect(FirebaseAuth.TooManyRequests).to.equal('auth/too-many-requests');
    });

    it('should have FTP statuses', () => {
      expect(FTP.AuthenticationMechanismAccepted).to.equal(234);
      expect(FTP.RestartMarkerReplay).to.equal(110);
    });

    it('should have Http statuses', () => {
      expect(Http.SeeOther).to.equal(303);
      expect(Http.UnavailableForLegalReasons).to.equal(451);
    });

    it('should have IIS statuses', () => {
      expect(IIS.AccessDeniedHostnameRestriction).to.equal(401.503);
      expect(IIS.ApplicationIsShuttingDownOnTheWebServer).to.equal(500.11);
    });

    it('should have MongoDB statues', () => {
      expect(MongoDB.Unauthorized).to.equal(13);
      expect(MongoDB.TooManyMatchingDocuments).to.equal(170);
    });

    it('should have MongoDB Exit statuses', () => {
      expect(MongoDBExit.OptionsError).to.equal(2);
      expect(MongoDBExit.SystemExitUncleanShutdown).to.equal(14);
    });

    it('should have Mongoose State statuses', () => {
      expect(MongooseState.Connected).to.equal(1);
      expect(MongooseState.Uninitialized).to.equal(99);
    });

    it('should have Nginx statuses', () => {
      expect(Nginx.InsufficientStorage).to.equal(507);
      expect(Nginx.MisdirectedRequest).to.equal(421);
    });

    it('should have Node statuses', () => {
      expect(Node.LoopDetected).to.equal(508);
      expect(Node.PayloadTooLarge).to.equal(413);
    });

    it('should have PostgreSQL statuses', () => {
      expect(PG.ConnectionFailure).to.equal('08006');
      expect(PG.UniqueViolation).to.equal('23505');
    });

    it('should have Twitter HTTP statuses', () => {
      expect(TwitterHttp.EnhanceYourCalm).to.equal(420);
      expect(TwitterHttp.Gone).to.equal(410);
    });

    it('should have Twitter Error statuses', () => {
      expect(TwitterErrors.CallbackUrlNotApproved).to.equal(415);
      expect(TwitterErrors.FollowLimitExceeded).to.equal(161);
    });

    it('should have IRC statuses', () => {
      expect(IRC.RPL_BANLIST).to.equal('367');
      expect(IRC.RPL_WELCOME).to.equal('001');
    });

    it('should have Mocha statuses', () => {
      expect(Mocha.NoFilesMatchPattern).to.equal(
        'ERR_MOCHA_NO_FILES_MATCH_PATTERN',
      );
      expect(Mocha.InvalidReporter).to.equal('ERR_MOCHA_INVALID_REPORTER');
    });
  });
});
