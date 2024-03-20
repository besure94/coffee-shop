import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm(props) {
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditingCoffee({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      roast: event.target.roast.value,
      quantity: 5,
      id: coffee.id
    })
  }
  return (
    <React.Fragment>
      <h1>Edit Coffee</h1>
      <ReusableForm
      formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText = "Edit"/>
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditingCoffee: PropTypes.func
};

export default EditCoffeeForm;