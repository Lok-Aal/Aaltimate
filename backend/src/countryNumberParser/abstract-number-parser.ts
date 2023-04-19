import { PhoneNumber } from "../utils/types";
import { CountryNumberParser } from "./country-number-parser";

export default class AbstractCountryNumberParser implements CountryNumberParser {

    
    phoneNumber: PhoneNumber = {
        landesvorwahl: "",
        ortsvorwahl: "",
        hauptwahl: "",
        durchwahl: ""
    };

    separators = [" ", "-", "/"];
    separatorsWithSpaceRegex = new RegExp(`[${this.separators.join("")}]`);
    separatorRegex = new RegExp(`[${this.separators.splice(1).join("")}]`);

    constructor(protected restNumber: string){}

    parsePhoneNumber(): PhoneNumber {
        this.parseOrtsvorwahl();
        this.parseHauptwahl();
        this.parseDurchwahl();
        return this.phoneNumber;
    }

    parseOrtsvorwahl(): string {
        return "";
    }

    parseHauptwahl(): string {
        return "";
    }

    parseDurchwahl(): string {
        return "";
    }
}
