import { expect } from 'chai';
import { mergeEnums } from '../lib/helpers';

import {
  APACHE,
  BRAINTREE,
  CLOUDFLARE,
  FTP,
  HTTP,
  IIS,
  MONGODB,
  NGINX,
  NODE,
} from '../lib';

enum Move {
  forward,
  backward,
  left,
  right,
}

enum Pets {
  cat = 6,
  dog = 23,
  fish = 49,
  wombat = 100,
  crab,
}

enum Color {
  green,
  red = 6,
  yellow,
  blue = 2,
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

      expect(merged.crab).to.equal(101);
      expect(merged.forward).to.equal(0);
      expect(lenr).to.equal(len1 + len2);
    });

    it('should overwrite duplicate keys, but not the associated values', () => {
      const len1 = Object.keys(Move).length;
      const len2 = Object.keys(Color).length;

      expect(len1).to.equal(8);
      expect(len2).to.equal(8);

      const merged = mergeEnums(Move, Color);

      expect(merged.forward).to.equal(merged.green);
      expect(merged[0]).to.equal('green');
      expect(merged[0]).to.not.equal('forward');
      expect(merged.left).to.equal(merged.blue);
      expect(merged[2]).to.equal('blue');
      expect(merged[2]).to.not.equal('left');

      expect(Object.keys(merged)).to.have.length(14);
    });
  });

  describe('Enums', () => {
    it('should have apache statuses', () => {
      expect(APACHE.INTERNAL_SERVER_ERROR).to.equal(500);
      expect(APACHE.CREATED).to.equal(201);
    });

    it('should have braintree statuses', () => {
      expect(BRAINTREE.ALREADY_REFUNDED).to.equal(4004);
      expect(BRAINTREE.PROCESSOR_DECLINED__POSSIBLE_STOLEN_CARD).to.equal(2013);
    });

    it('should have cloudflare statuses', () => {
      expect(CLOUDFLARE.INVALID_SSL_CERTIFICATE).to.equal(526);
      expect(CLOUDFLARE.ORIGIN_IS_UNREACHABLE).to.equal(523);
    });

    it('should have ftp statuses', () => {
      expect(FTP.AUTHENTICATION_MECHANISM_ACCEPTED).to.equal(234);
      expect(FTP.RESTART_MARKER_REPLAY).to.equal(110);
    });

    it('should have http statuses', () => {
      expect(HTTP.SEE_OTHER).to.equal(303);
      expect(HTTP.UNAVAILABLE_FOR_LEGAL_REASONS).to.equal(451);
    });

    it('should have iis statuses', () => {
      expect(IIS.REDIRECT).to.equal(451);
      expect(IIS.RETRY_WITH).to.equal(449);
    });

    it('should have mongodb statues', () => {
      expect(MONGODB.UNAUTHORIZED).to.equal(13);
      expect(MONGODB.TOO_MANY_MATCHING_DOCUMENTS).to.equal(170);
    });

    it('should have nginx statuses', () => {
      expect(NGINX.INSUFFICIENT_STORAGE).to.equal(507);
      expect(NGINX.MISDIRECTED_REQUEST).to.equal(421);
    });

    it('should have node statuses', () => {
      expect(NODE.LOOP_DETECTED).to.equal(508);
      expect(NODE.PAYLOAD_TOO_LARGE).to.equal(413);
    });
  });
});
