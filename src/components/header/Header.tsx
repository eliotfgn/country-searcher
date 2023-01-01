import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Header.css";
import {isDark, setMode} from "../../utils/app-mode";


function Header() {

  const [darkMode, setDarkMode] = useState<boolean>();

  const changeMode = () => {
    if (darkMode) {
      setMode("light");
      setDarkMode(false);
    } else {
      setMode("dark");
      setDarkMode(true);
    }
  }

  useEffect(() => {
    if (isDark()) {
      setDarkMode(true);
    }
  }, []);


  return (
      <header className={darkMode ? "dark" : "light"}>
        <h1 className="font-bold">Where in the world?</h1>
        <div className="mode" onClick={changeMode}>
          {darkMode
              ? <FontAwesomeIcon className="rotate" icon={["fas", "moon"]} size={"1x"}/>
              : <FontAwesomeIcon className="rotate" icon={["far", "moon"]} size={"1x"}/>
          }
          <p>Dark Mode</p>
        </div>
      </header>
  );
}

export default Header;