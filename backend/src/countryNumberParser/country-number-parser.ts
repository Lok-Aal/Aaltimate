import { PhoneNumber } from "../utils/types";
import AbstractCountryNumberParser from "./abstract-number-parser";
import GermanNumberParser from "./german-number-parser";

export interface CountryNumberParser {
    parsePhoneNumber(): PhoneNumber;
}

export const CountryParserMap: { [key: string]: typeof AbstractCountryNumberParser } = {
    "49": GermanNumberParser,
};