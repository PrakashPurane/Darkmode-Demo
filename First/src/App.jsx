import { useState } from "react";
import "./App.css";
import Toggle from "./components/Toggle/Toggle";
import useLocalStorage from 'use-local-storage';

function App() {
  const [isDark,setIsDark]=useLocalStorage("isDark", false);
  return <>
  <div className="App" data-theme={isDark ? "dark" : "light"}>
    <Toggle isChecked={isDark} handleChange={()=>setIsDark(!isDark)} />
    <h1 className="title">Prakash Purane</h1>
    <div className="box">
      <h2>DarkMode Theme</h2>
    </div>
  </div>
  </>;
}

export default App;
