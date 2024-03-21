import React from "react";
import coffeeImage from "./../img/coffee-pic.jpg";

function Header() {
  return (
    <div className="app-header">
      <h1>Coffee Shop</h1>
      <img src={coffeeImage} alt=""/>
    </div>
  );
}

export default Header;