import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {findIconDefinition, IconDefinition, IconLookup} from "@fortawesome/fontawesome-svg-core";


function Header() {

  return (
      <header className="flex justify-between py-4 px-4 text-base">
        <h1 className="font-semi-bold text-dark-blue">Where in the world?</h1>
        <div>
          <FontAwesomeIcon icon={["far", "moon"]} color={"red"} />
          <p className="">Dark Mode</p>
        </div>
      </header>
  );
}

export default Header;