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
      quantity: 130,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h3>Add Coffee</h3>
      <p><strong>Note:</strong> <em>All of our coffee comes in burlap sacks. One burlap sack is 130 lbs.</em></p>
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
          type="radio"
          id="light"
          name="roast"
          value="Light Roast"
          required/>
        <label htmlFor="light">Light Roast</label>
        <br/>
        <input
          type="radio"
          id="medium"
          name="roast"
          value="Medium Roast"
          required/>
        <label htmlFor="medium">Medium Roast</label>
        <br/>
        <input
          type="radio"
          id="dark"
          name="roast"
          value="Dark Roast"
          required/>
        <label htmlFor="dark">Dark Roast</label>
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