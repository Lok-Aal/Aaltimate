import { country_codes } from "./dicts";
import { PhoneNumber } from "./types";

export function parsePhoneNumber(number: string): PhoneNumber | null {
    number = number
        .replace(/[\s/\-\(\)]+/g, " ")  // replace seperators with single spaces
        .trim()
        .replace(/^\+/, "00");      // replace beginning + with 00

    console.log(`number: ${number}`);
    let country_match = countryMatch(number);

    if (!country_match) {
        return null;
    }

    let [country_code, number_rest] = country_match;



    let telephoneNumber: PhoneNumber = {
        landesvorwahl: country_code,
        ortsvorwahl: "",
        hauptwahl: number_rest,
        durchwahl: ""
    }

    return telephoneNumber;
}

function countryMatch(number: string): [string, string] | null {
    if (!number.startsWith("0")) return null;

    let country_code = "0";

    if (number.startsWith("00")) {
        for (let length of [1, 2, 3]) {
            if (number.slice(2, 2 + length) in country_codes) {
                country_code = number.slice(2, 2 + length)
                break;
            }
        }
        if (country_code === "0") return null;
    }

    return [country_code, number.slice(country_code === "0" ? 1 : 2 + country_code.length).trim()];
}