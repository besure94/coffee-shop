import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      <h4>Name: {props.name}</h4>
      <h4>Origin: {props.origin}</h4>
      <h4>Price: ${props.price}</h4>
      <h4>Roast: {props.roast}</h4>
      <h4>Quantity: {props.quantity}</h4>
      <hr/>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired
}

export default Coffee;