import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <p><strong>Note:</strong> <em>All of our coffee comes in burlap sacks. One burlap sack is 130 lbs.</em></p>
      <form onSubmit={props.formSubmissionHandler}>
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
        <label>Select a roast:</label>
        <br/>
        <input
          type="radio"
          id="light"
          name="roast"
          value="Light"
          required/>
        <label htmlFor="light">Light</label>
        <br/>
        <input
          type="radio"
          id="medium"
          name="roast"
          value="Medium"
          required/>
        <label htmlFor="medium">Medium</label>
        <br/>
        <input
          type="radio"
          id="dark"
          name="roast"
          value="Dark"
          required/>
        <label htmlFor="dark">Dark</label>
        <br/>
        <button type="submit">{props.buttonText}</button>
        <hr/>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;