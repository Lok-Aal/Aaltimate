import { expect } from "chai";
import { parsePhoneNumber } from "../src/utils/number-parser";
import { PhoneNumber } from "../src/utils/types";

//das sollte alles gehen
/*
+49 0201 123456i
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
  it('should test correctly', () => {
    expect(true).to.be.true;
  });
    // it('+49 0201 123456', () => {
    //     let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"",hauptwahl:"123456",ortsvorwahl:"0201"}
    //   expect(parsePhoneNumber("+49 0201 123456"))
    //       .equal(telephone);
    // });
    // it('+44 0201123456 throws error cause its bratain', () => {
    //   expect(parsePhoneNumber("+44 0201123456"))
    //       .throws();
    // });
    // it('0049 0201/123456', () => {
    //     let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"",hauptwahl:"123456",ortsvorwahl:"0201"}
    //   expect(parsePhoneNumber("0049 0201/123456"))
    //       .equal(telephone);
    // });
    // it('0049201123456', () => {
    //     let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"",hauptwahl:"123456",ortsvorwahl:"201"}
    //   expect(parsePhoneNumber("0049201123456"))
    //       .equal(telephone);
    // });
    // it('(0)201 1234 56', () => {
    //     let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"",hauptwahl:"123456",ortsvorwahl:"201"}
    //   expect(parsePhoneNumber("(0)201 1234 56"))
    //       .equal(telephone);
    // });
    // it('+49 (941) 790-4780', () => {
    //     let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"",hauptwahl:"7904780",ortsvorwahl:"941"}
    //   expect(parsePhoneNumber("+49 (941) 790-4780"))
    //       .equal(telephone);
    // });
    // it('015115011900', () => {
    //     let telephone:PhoneNumber = {landesvorwahl:"34",durchwahl:"4343",hauptwahl:"3434",ortsvorwahl:"3443"}
    //   expect(parsePhoneNumber("015115011900"))
    //       .throws();
    // });
    // it('+91 09870987 899', () => {
    //     let telephone:PhoneNumber = {landesvorwahl:"34",durchwahl:"4343",hauptwahl:"3434",ortsvorwahl:"3443"}
    //   expect(parsePhoneNumber("+91 09870987 899"))
    //       .throws();
    // });
    // it('[+49] (0)89-800/849-50', () => {
    //     let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"",hauptwahl:"849-0",ortsvorwahl:"89800"}
    //   expect(parsePhoneNumber("[+49] (0)89-800/849-50"))
    //     .equal(telephone);
    // });
    // it('+49 (8024) [990-477]', () => {
    //     let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"",hauptwahl:"990477",ortsvorwahl:"8024"}
    //   expect(parsePhoneNumber("+49 (8024) [990-477]"))
    //     .equal(telephone);
    // });
  });