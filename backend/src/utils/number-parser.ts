import { PhoneNumber } from "./types";

export function parsePhoneNumber(number: string): PhoneNumber | null {
    
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
    const COUNTRY_PATTERN = /^(\+\d{1,2}|0)([ 0-9\/()\[\]-]*)$/;
    
    let matches = number.match(COUNTRY_PATTERN);

    if (!matches) {
        return null;
    }

    let [, country_code, number_rest] = matches;
    
    return [country_code, number_rest.trim()];
}