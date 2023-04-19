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
    separatorsRegex = new RegExp(`[${this.separators.join("")}]`, `gm`);

    enclosures = ["(", ")", "[", "]"];
    enclosuresRegex = new RegExp(`[${this.enclosures.join("\\")}]`, `gm`);

    maxDurchwahlLength = 3;

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
