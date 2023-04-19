export default class WrongCountryError extends Error {
  constructor(countryCode: string) {
    super(`Country with code ${countryCode} is not supported.`);
  }
}