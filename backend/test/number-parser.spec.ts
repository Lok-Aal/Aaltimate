import { parsePhoneNumber } from "../src/utils/number-parser";
import { PhoneNumber } from "../src/utils/types";


describe('parsePhoneNumber', () => {
    it('parses Number into slices ', () => { 
      expect(parsePhoneNumber("3429238432"))
          .toEqual([232,323,2323,32]);
    });
  });