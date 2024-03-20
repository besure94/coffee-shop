import './App.css';
import React from "react";
import Header from "./Header";
import CoffeeControl from "./CoffeeControl";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <hr/>
      <CoffeeControl/>
    </React.Fragment>
  );
}

export default App;
