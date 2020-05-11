import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { API } from './component/latihan3/Api'
import { Des } from "./component/latihan3/DEs";
import { ButtonAppBar } from "./component/latihan3/Navbar";
function App() {




  return (
    <div className="App">
      {/* <h1>Hello world</h1> */}
      <ButtonAppBar />
      <Des />
    </div>
  );
}

export default App;


