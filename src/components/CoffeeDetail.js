import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee } = props;
  return (
    <React.Fragment>
      <h1>Coffee Details</h1>
      <h3>Name: {coffee.name}</h3>
      <h3>Origin: {coffee.origin}</h3>
      <h3>Price: ${coffee.price}</h3>
      <h3>Roast: {coffee.roast}</h3>
      <h3>Quantity: {coffee.quantity} pounds</h3>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object
};

export default CoffeeDetail;