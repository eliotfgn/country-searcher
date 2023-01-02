import {useState, useEffect, useContext} from 'react'
import Header from "./components/header/Header";
import AppModeContext from "./utils/app-mode-context";
import {isDark, setAppMode} from "./utils/app-mode";
import CountriesList from "./components/countries-list/CountriesList";
import "./App.css"

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
  });


  return (
      <AppModeContext.Provider value={mode}>
        <div className={"content-"+mode+" content"}>
          <Header changeMode={changeMode}/>
          <CountriesList/>
        </div>
      </AppModeContext.Provider>
  )
}

export default App
