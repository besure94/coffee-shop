import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee, onClickingSell, onClickingDelete, onClickingEdit } = props;
  return (
    <React.Fragment>
      <h1>Coffee Details</h1>
      <h3>Name: {coffee.name}</h3>
      <h3>Origin: {coffee.origin}</h3>
      <h3>Price: ${coffee.price}</h3>
      <h3>Roast: {coffee.roast}</h3>

      {coffee.quantity === 0 ? (
        <React.Fragment>
          <h3>Out of stock</h3>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h3>Quantity (lbs): {coffee.quantity}</h3>
          <button onClick={() => onClickingSell(coffee)}>Sell</button>
        </React.Fragment>
      )}
      <br/>
      <button onClick={() => onClickingEdit(coffee.id)}>Edit</button>
      <br/>
      <button onClick={() => onClickingDelete(coffee.id)}>Delete</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingSell: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeDetail;