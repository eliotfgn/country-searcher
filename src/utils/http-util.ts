import {ICountry} from "./ICountry";

const BASE_URL = "https://restcountries.com/v3.1/";

export async function getAllCountries(): Promise<ICountry[]> {
  const response = await fetch(BASE_URL+"all");
  const countries = await response.json();

  return countries.map((country: any) => {
    let c: ICountry = {
      capital: country.capital,
      flag: country.flags.png,
      name: country.name.common,
      population: country.population,
      region: country.region
    }
    return c;
  });
}

export async function getByName(name: string): Promise<ICountry[]> {
  const response = await fetch(BASE_URL+"name/"+name);
  const data = await response.json();

  return data.map((country: any) => {
    let c: ICountry = {
      capital: country.capital,
      flag: country.flags.png,
      name: country.name.common,
      population: country.population,
      region: country.region
    }
    return c;
  });
}
