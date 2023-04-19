export default class WrongFormatError extends Error {
    constructor(subnumber: string) {
        super(`Wrong format, couldnt parse subnumber: ${subnumber}`);
    }
}