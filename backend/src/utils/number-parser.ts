import { PhoneNumber } from "./types";

export function parsePhoneNumber(number: string): PhoneNumber {

    let telephoneNumber: PhoneNumber = {
        landesvorwahl: number,
        ortsvorwahl: number,
        hauptwahl: number,
        durchwahl: number
    }

    return telephoneNumber;
}