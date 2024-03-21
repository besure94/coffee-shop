import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>Name: <span className="coffee-details">{props.name}</span></h3>
        <h3>Origin: <span className="coffee-details">{props.origin}</span></h3>
        <h3>Price: <span className="coffee-details">${props.price}</span></h3>
        <h3>Roast: <span className="coffee-details">{props.roast}</span></h3>
        {props.quantity === 0 ? (
          <React.Fragment>
            <h2><span className="coffee-details">Out of stock!</span></h2>
          </React.Fragment>
        ) : (
          <h3>Quantity (lbs): <span className="coffee-details">{props.quantity}</span></h3>
        )}
        <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;