import { useState, useEffect } from 'react'
import Header from "./components/header/Header";
import AppModeContext from "./utils/app-mode-context";
import {isDark, setAppMode} from "./utils/app-mode";
import CountriesList from "./components/countries-list/CountriesList";

function App() {

  const [mode, setMode] = useState<string>("");
  const changeMode = (mode: "dark" | "light") => {
    setAppMode(mode);
    setMode(mode);
  }

  useEffect(() => {
    if (isDark()) {
      setMode("dark");
    } else  {
      setMode("light");
    }
  }, []);


  return (
      <AppModeContext.Provider value={mode}>
        <div>
          <Header changeMode={changeMode}/>
          <CountriesList/>
        </div>
      </AppModeContext.Provider>
  )
}

export default App
