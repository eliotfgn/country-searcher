import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Header.css";


function Header() {

  return (
      <header className="flex justify-between py-4 px-4">
        <h1 className="font-bold">Where in the world?</h1>
        <div className="mode">
          <FontAwesomeIcon className="rotate" icon={["far", "moon"]} />
          <p>Dark Mode</p>
        </div>
      </header>
  );
}

export default Header;