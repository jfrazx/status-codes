import { expect } from 'chai';
import { mergeEnums } from '../lib/helpers';

import {
  Apache,
  Braintree,
  Cloudflare,
  FTP,
  Http,
  IIS,
  MongoDB,
  MongoDBExit,
  MongooseState,
  Nginx,
  Node,
} from '../lib';

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
      const lenr = Object.keys(merged).length;

      expect(merged.Crab).to.equal(101);
      expect(merged.Forward).to.equal(0);
      expect(lenr).to.equal(len1 + len2);
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
  });

  describe('Enums', () => {
    it('should have Apache statuses', () => {
      expect(Apache.InternalServerError).to.equal(500);
      expect(Apache.Created).to.equal(201);
    });

    it('should have Braintree statuses', () => {
      expect(Braintree.AlreadyRefunded).to.equal(4004);
      expect(Braintree.ProcessorDeclinedPossibleStolenCard).to.equal(2013);
    });

    it('should have Cloudflare statuses', () => {
      expect(Cloudflare.InvalidSslCertificate).to.equal(526);
      expect(Cloudflare.OriginIsUnreachable).to.equal(523);
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
      expect(IIS.Redirect).to.equal(451);
      expect(IIS.RetryWith).to.equal(449);
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
  });
});
