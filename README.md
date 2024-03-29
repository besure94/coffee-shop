# Coffee Shop

#### An application that allows a coffee shop to manage their inventory.

#### By Brian Scherner

## Technologies Used

* React
* JavaScript
* JSX
* HTML
* Webpack
* Node Package Manager
* Babel
* ES Lint
* Bootstrap
* CSS

## Description

This application presents users with a home page for a local coffee shop. Users can select `Add Coffee` to begin adding different brands of coffee to their inventory. After clicking `Add Coffee`, the user is presented with a form, where they enter the coffee's name, origin, price, and roast. Users can add as many different coffee's as they want, which will all be displayed on the home page.

Each brand of coffee comes in a burlap sack, which weighs 130 lbs. This will be automatically added when a new coffee is added to the list. Users can select a coffee to view its details. They can then select `Sell`, which will decrease the amount of coffee by 1 lb. Once the quantity of coffee reaches 0, the quantity will be replaced by a message that says `Out of Stock!`. A `Restock` button will appear, which will add 130 lbs to the coffee when clicked.

Users can also `Edit` a coffee's details, and they can delete a coffee brand from their inventory entirely if they wish to do so.

To view a diagram of this application to understand its component structure, [click here](./coffee_shop_diagram.drawio.svg).

## Setup/Installation Requirements

* Select the green `Code` button, and clone this repository to your desktop.
* In your terminal, navigate to this project's folder, and run the command `$ npm install`. This will install all relevant packages.
* Run the command `$ npm run start` to start a live development server. This will open the project in your web browser at the URL `localhost:3000`, allowing you to use the application.

## Known Bugs

None.

## License

MIT

Copyright(c) 2024 Brian Scherner

