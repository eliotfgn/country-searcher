import React, {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Header.css";
import AppModeContext from "../../utils/app-mode-context";


function Header(props: {changeMode: any}) {

  const modeCtx = useContext(AppModeContext);

  const handleModeChange = () => {
    if (modeCtx === "dark") {
      props.changeMode("light");
    } else {
      props.changeMode("dark")
    }
  }


  return (
      <header className={modeCtx}>
        <h1 className="font-bold">Where in the world?</h1>
        <div className="mode" onClick={handleModeChange}>
          {modeCtx === "dark"
              ? <FontAwesomeIcon className="rotate" icon={["fas", "moon"]} size={"1x"}/>
              : <FontAwesomeIcon className="rotate" icon={["far", "moon"]} size={"1x"}/>
          }
          <p>Dark Mode</p>
        </div>
      </header>
  );
}

export default Header;