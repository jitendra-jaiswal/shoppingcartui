# Shoppingcart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

1. Angular UI implemented to interact with WebAPIs. 
	a. SubComponent compartmentalization used to ensure reusability of components such as productdetail component as a child component for product list passing each product as input to child component.
	b. Feature developed 
		- /Product - Page interacting with products and webapi, fetching products, parsing response and displaying products with details to enable customers to add to cart and quantity.
		- /cart - Page interacting with cart api to fetch list of items added in cart, show the unit proice, disocunt, discount code used and special message if any along with summary of entire cart with totalamount, totaldiscount and net amount.
		- Cart Service - service injected in root added to enable webapi interaction from different components.
		- Router - Router based application navigation added injected in root to support product and cart navigation.
		- Flex based wrapping added to support minimal responsiveness.(Bootstrap based complete responsiveness pending implementation)

2. Run shopping cart api and generate jwt token to replace in the cart.service.ts app to run it locally
    

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
