import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props) {
  const quantity = 130;
  return (
    <React.Fragment>
      {props.coffeeList.map((coffee, index) =>
        <Coffee name={coffee.name}
          origin={coffee.origin}
          price={coffee.price}
          roast={coffee.roast}
          quantity={quantity}
          key={index}/>
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array
};

export default CoffeeList;

