export interface ICountry {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  nativeName?: string;
  subRegion?: string;
  topLevelDomain?: string;
  currencies?: string[];
  languages?: string[];
  borderCountries?: string[];
}