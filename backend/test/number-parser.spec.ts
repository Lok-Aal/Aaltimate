import { parsePhoneNumber } from "../src/utils/number-parser";
import { PhoneNumber } from "../src/utils/types";


describe('parsePhoneNumber', () => {
    it('parses Number into slices ', () => {
        let telephone:PhoneNumber = {landesvorwahl:"34",durchwahl:"4343",hauptwahl:"3434",ortsvorwahl:"3443"}
      expect(parsePhoneNumber("3429238432"))
          .toEqual(telephone);
    });
  });