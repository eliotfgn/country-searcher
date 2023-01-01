import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {faMoon as farMoon} from "@fortawesome/free-regular-svg-icons";


library.add(faMoon, farMoon);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
