import { CountryParserMap } from "../countryNumberParser/country-number-parser";
import WrongCountryError from "../errors/wrong-country-error";
import { e164toIso3166 } from "./dicts";
import { PhoneNumber } from "./types";

export function parsePhoneNumber(number: string): PhoneNumber | null {

    

    // Ländervorwahl can be enclosed in brackets or parantheses replace them with nothing if they are there

    if(number.startsWith("(") || number.startsWith("[")) {
        number = number.replace(/[\(\[]/g, "").replace(/[\)\]]/g, "");
    }
    

    number = number.trim().replace(/^\+/g, "00"); // replace beginning + with 00

    // If the number starts with a single 0 it is a local number and we should replace the start with 0049

    if (!number.startsWith("00")) {
        number = number.slice(1);
        number = "0049" + number;
    }

    let country_match = countryMatch(number);


    if (!country_match) {
        return null;
    }

    let [country_code, number_rest] = country_match;

    let countryParser = CountryParserMap[country_code];


    if(countryParser === undefined) {
        throw new WrongCountryError(country_code);
    }
    return new countryParser(number_rest).parsePhoneNumber();

}

function countryMatch(number: string): [string, string] | null {
    if (!number.startsWith("0")) return null;

    let country_code = "0";

    if (number.startsWith("00")) {
        for (let length of [1, 2, 3]) {
            if (number.slice(2, 2 + length) in e164toIso3166) {
                country_code = number.slice(2, 2 + length)
                break;
            }
        }
        if (country_code === "0") return null;
    }

    return [country_code, number.slice(country_code === "0" ? 1 : 2 + country_code.length).trim()];
}