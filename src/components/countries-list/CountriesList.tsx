import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import AppModeContext from "../../utils/app-mode-context";
import "./CountriesList.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Country from "../country/Country";
import {getAllCountries, getByName} from "../../utils/http-util";
import {data} from "autoprefixer";
import {ICountry} from "../../utils/ICountry";

const regions: Array<string> = ["Africa", "America", "Asia", "Europe", "Oceania"];

function CountriesList() {

  const modeCtx = useContext(AppModeContext);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    getAllCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  useEffect(() => {
    getByName(country).then(data => {
      setCountries(data);
    })
  }, [country] );



  const handleChangeCountry = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  }

  const handleChangeRegion = (event: ChangeEvent<HTMLSelectElement>) => {
    setRegion(event.target.value);
  }

  return (
      <div className={"content-"+modeCtx+" homepage"}>
        <div className={"search-section"}>
          <div className={"input-" + modeCtx+" search-box"}>
            <FontAwesomeIcon icon={["fas", "magnifying-glass"]}/>
            <input className={"input-" + modeCtx+" input"}
                      type="text"
                      placeholder={"Search for a country..."}
                      onChange={handleChangeCountry}
            />
          </div>

          <select className={"select-"+modeCtx+" select"}
                  name="region"
                  placeholder="Filter by region"
                  onChange={handleChangeRegion}>
            <option value="" hidden>Filter by region</option>
            {regions.map((region, key) => {
              return <option value={region} key={key}>{region}</option>
            })}
          </select>
        </div>
        <div className="my-10 mx-5 sm:mx-24 md:mx-24 grid md:grid-cols-4 gap-10 lg:mx-5">
          {
            countries.length > 0
                ? countries.map((country: ICountry, key) => {
                    return <Country key={key} name={country.name}
                                    population={country.population}
                                    region={country.region}
                                    capital={country.capital}
                                    flag={country.flag}/>
                    })
            : <p>Loading...</p>
          }
        </div>
      </div>
  );
}

export default CountriesList;