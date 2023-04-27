import { expect } from "chai";
import { parsePhoneNumber } from "../src/utils/number-parser";
import { PhoneNumber } from "../src/utils/types";
import WrongCountryError from "../src/errors/wrong-country-error";
import WrongFormatError from "../src/errors/wrong-format-error";

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
  // it('should test correctly', () => {
  //   expect(true).to.be.true;
  // });
    it('+49 0201 123456', () => {
        let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"",hauptwahl:"123456",ortsvorwahl:"201"}
      expect(parsePhoneNumber("+49 0201 123456"))
          .to.include(telephone);
    });
    it('0049 0201/123456', () => {
        let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"",hauptwahl:"123456",ortsvorwahl:"201"}
      expect(parsePhoneNumber("0049 0201/123456"))
          .to.include(telephone);
    });
    it('0049201123456', () => {
        let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"",hauptwahl:"123456",ortsvorwahl:"201"}
      expect(parsePhoneNumber("0049201123456"))
          .to.include(telephone);
    });
    it('(0)201 1234 56', () => {
        let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"56",hauptwahl:"1234",ortsvorwahl:"201"}
      expect(parsePhoneNumber("(0)201 1234 56"))
          .to.include(telephone);
    });
    it('+49 (941) 790-4780', () => {
        let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"4780",hauptwahl:"790",ortsvorwahl:"941"}
        expect(parsePhoneNumber("+49 (941) 790-4780"))
        .to.include(telephone);
      });
  
    it('+49 (8024) [990-477]', () => {
        let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"477",hauptwahl:"990",ortsvorwahl:"8024"}
      expect(parsePhoneNumber("+49 (8024) [990-477]"))
        .to.include(telephone);
    });
  it('(No spacing with brackets) +49(8024)[990-477]', () => {
        let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"477",hauptwahl:"990",ortsvorwahl:"8024"}
      expect(parsePhoneNumber("+49(8024)[990-477]")).to.include(telephone);
  });
  it('(No spacing with brackets in landesvorwahl) [+49](8024)[990-477]', () => {
        let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"477",hauptwahl:"990",ortsvorwahl:"8024"}
      expect(parsePhoneNumber("[+49](8024)[990-477]")).to.include(telephone);
  });
  it('(No spacing without brackets) +498024990477', () => {
        let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"",hauptwahl:"990477",ortsvorwahl:"8024"}
      expect(parsePhoneNumber("+498024990477")).to.include(telephone);
  });
  it('(No spacing only landesvorwahl bracket) [+49]8024990477', () => {
        let telephone:PhoneNumber = {landesvorwahl:"49",durchwahl:"",hauptwahl:"990477",ortsvorwahl:"8024"}
      expect(parsePhoneNumber("+498024990477")).to.include(telephone);
  });
  });

describe('parsePhoneNumber fail-tests', ()=>{

  it('+91 09870987 899', () => {
    expect(() => parsePhoneNumber("+91 09870987 899")).to.throw(WrongCountryError);
  });
  it('[+49] (0)89-800/849-50', () => {
    expect(() => parsePhoneNumber("[+49] (0)89-800/849-50"))
      .to.throw(WrongFormatError);
  });

  it('015115011900', () => {
    expect(() => parsePhoneNumber("015115011900"))
      .to.throw(WrongFormatError);
  });

  it('+44 0201123456 to.throw error cause its bratain', () => {
    expect(() => parsePhoneNumber("+44 0201123456"))
      .to.throw(WrongCountryError);
  });

  it('+33 0201/123456 to.throw error cause its france', () => {

    expect(() => parsePhoneNumber("+33 0201/123456"))
      .to.throw(WrongCountryError);
  });

  it('4+97151 2058990 (to throw because of typo)', () => {
    expect(() => parsePhoneNumber("4+97151 2058990"))
      .to.throw(WrongFormatError);
  });

  it('497151 2058990 (to throw because started not with + or zero or bracket)', () => {
    expect(() => parsePhoneNumber("497151 2058990"))
      .to.throw(WrongFormatError);
  });

  it('+49 23898 A93849 (to throw because of nonlegal character)', () => {
    expect(() => parsePhoneNumber("+49 23898 A93849"))
      .to.throw(WrongFormatError);
  });

  



});