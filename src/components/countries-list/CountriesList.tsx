import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import AppModeContext from "../../utils/app-mode-context";
import "./CountriesList.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const regions: Array<string> = ["Africa", "America", "Asia", "Europe", "Oceania"];

function CountriesList() {

  const modeCtx = useContext(AppModeContext);
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");

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
      </div>
  );
}

export default CountriesList;