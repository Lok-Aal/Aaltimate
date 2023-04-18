import { parsePhoneNumber } from "../src/utils/number-parser";
import { PhoneNumber } from "../src/utils/types";

//das sollte alles gehen
/*
+49 0201 123456
+44 0201123456
0033 0201/123456
0049201123456
(0)201 1234 56
+49 (941) 790-4780
015115011900
+91 09870987 899
[+49] (0)89-800/849-50
+49 (8024) [990-477]
*/

describe('parsePhoneNumber', () => {
    it('+49 0201 123456', () => {
        let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"",hauptwahl:"123456",ortsvorwahl:"0201"}
      expect(parsePhoneNumber("+49 0201 123456"))
          .toEqual(telephone);
    });
    it('+44 0201123456', () => {
        let telephone:PhoneNumber = {landesvorwahl:"44",durchwahl:"",hauptwahl:"123456",ortsvorwahl:"0201"}
      expect(parsePhoneNumber("+44 0201123456"))
          .toEqual(telephone);
    });
    it('0033 0201/123456', () => {
        let telephone:PhoneNumber = {landesvorwahl:"34",durchwahl:"4343",hauptwahl:"3434",ortsvorwahl:"3443"}
      expect(parsePhoneNumber("0033 0201/123456"))
          .toEqual(telephone);
    });
    it('0049201123456', () => {
        let telephone:PhoneNumber = {landesvorwahl:"34",durchwahl:"4343",hauptwahl:"3434",ortsvorwahl:"3443"}
      expect(parsePhoneNumber("0049201123456"))
          .toEqual(telephone);
    });
    it('(0)201 1234 56', () => {
        let telephone:PhoneNumber = {landesvorwahl:"34",durchwahl:"4343",hauptwahl:"3434",ortsvorwahl:"3443"}
      expect(parsePhoneNumber("(0)201 1234 56"))
          .toEqual(telephone);
    });
    it('+49 (941) 790-4780', () => {
        let telephone:PhoneNumber = {landesvorwahl:"34",durchwahl:"4343",hauptwahl:"3434",ortsvorwahl:"3443"}
      expect(parsePhoneNumber("+49 (941) 790-4780"))
          .toEqual(telephone);
    });
    it('015115011900', () => {
        let telephone:PhoneNumber = {landesvorwahl:"34",durchwahl:"4343",hauptwahl:"3434",ortsvorwahl:"3443"}
      expect(parsePhoneNumber("015115011900"))
          .toEqual(telephone);
    });
    it('+91 09870987 899', () => {
        let telephone:PhoneNumber = {landesvorwahl:"34",durchwahl:"4343",hauptwahl:"3434",ortsvorwahl:"3443"}
      expect(parsePhoneNumber("+91 09870987 899"))
          .toEqual(telephone);
    });
    it('[+49] (0)89-800/849-50', () => {
        let telephone:PhoneNumber = {landesvorwahl:"34",durchwahl:"4343",hauptwahl:"3434",ortsvorwahl:"3443"}
      expect(parsePhoneNumber("[+49] (0)89-800/849-50"))
          .toEqual(telephone);
    });
    it('+49 (8024) [990-477]', () => {
        let telephone:PhoneNumber = {landesvorwahl:"34",durchwahl:"4343",hauptwahl:"3434",ortsvorwahl:"3443"}
      expect(parsePhoneNumber("+49 (8024) [990-477]"))
          .toEqual(telephone);
    });
  });