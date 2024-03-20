import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from "./CoffeeList";
import CoffeeDetail from './CoffeeDetail';
import EditCoffeeForm from './EditCoffeeForm';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleSellClick = (coffeeToSell) => {
    const soldCoffee = {...coffeeToSell, quantity: coffeeToSell.quantity -= 1};
    const editedMainCoffeeList = this.state.mainCoffeeList
    .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
    .concat(soldCoffee);
    this.setState({
      mainCoffeeList: editedMainCoffeeList
    });
  }

  handleRestockClick = (coffeeToRestock) => {
    const restockedCoffee = {...coffeeToRestock, quantity: coffeeToRestock.quantity += 130};
    const editedMainCoffeeList = this.state.mainCoffeeList
    .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
    .concat(restockedCoffee);
    this.setState({
      mainCoffeeList: editedMainCoffeeList
    });
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({mainCoffeeList: newMainCoffeeList, formVisibleOnPage: false});
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  handleEditingCoffee =(coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
    .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
    .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText= null;

    if (this.state.editing) {
      currentlyVisibleState = <EditCoffeeForm coffee = {this.state.selectedCoffee}
      onEditingCoffee = {this.handleEditingCoffee}/>
      buttonText = "Return to Coffee List";
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail coffee = {this.state.selectedCoffee}
      onClickingSell = {this.handleSellClick}
      onClickingRestock = {this.handleRestockClick}
      onClickingDelete = {this.handleDeletingCoffee}
      onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList}/>
      buttonText = "Return to Coffee List";
    } else {
      currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSelection={this.handleChangingSelectedCoffee}/>
      buttonText = "Add Coffee";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default CoffeeControl;