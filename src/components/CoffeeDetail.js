import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee, onClickingSell, onClickingDelete, onClickingEdit, onClickingRestock } = props;
  return (
    <React.Fragment>
      <h2>Coffee Details</h2>
      <h3>Name: <span className="coffee-details">{coffee.name}</span></h3>
      <h3>Origin: <span className="coffee-details">{coffee.origin}</span></h3>
      <h3>Price: <span className="coffee-details">${coffee.price}</span></h3>
      <h3>Roast: <span className="coffee-details">{coffee.roast}</span></h3>

      {coffee.quantity === 0 ? (
        <React.Fragment>
          <h2><span className="coffee-details">Out of stock!</span></h2>
          <button onClick={() => onClickingRestock(coffee)}>Restock</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h3>Quantity (lbs): <span className="coffee-details">{coffee.quantity}</span></h3>
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
  onClickingEdit: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default CoffeeDetail;