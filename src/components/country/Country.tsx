import React from 'react';
import {ICountry} from "../../utils/ICountry";
import "./Country.css";

function Country(props: ICountry) {
  return (
      <div className="rounded-md pb-5 overflow-hidden shadow">
        <img src={props.flag} className="h-1/2 w-full" alt="flag"/>
        <div className="mt-3 mx-4">
          <h1 className="font-bold mb-3">{props.name}</h1>
          <p><span>Population: </span> {props.population}</p>
          <p><span>Region: </span> {props.region}</p>
          <p><span>Capital: </span> {props.capital}</p>
        </div>
      </div>
  );
}

export default Country;