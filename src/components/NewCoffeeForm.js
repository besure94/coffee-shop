import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewCoffeeForm(props) {

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      roast: event.target.roast.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h3>Add Coffee</h3>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required/>
        <br/>
        <input
          type="text"
          name="origin"
          placeholder="Origin"
          required/>
        <br/>
        <input
          type="number"
          name="price"
          placeholder="Price"
          min="1"
          required/>
        <br/>
        <input
          type="text"
          name="roast"
          placeholder="Roast"
          required/>
        <br/>
        <input
          type="number"
          name="quantity"
          value="130"
          placeholder="value"
          required/>
        <br/>
        <button type="submit">Add</button>
        <hr/>
      </form>
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;