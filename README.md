This is a [Next.js](https://nextjs.org/) project 

## Getting Started

Firstly, change directory to "shop-com" afterwards,
run command yarn to install the necessary packages and then yarn dev to start up the application on localhost:3000

commands:
yarn 
yarn dev




## Redux Statemanagement

Cart Slice:

Purpose: Keeps track of what's in the shopping cart.
How: It stores an array of items in the cart, each having details like id, title, price, and images. It allows you to add items to the cart and remove them.
Selectors: You can easily fetch the list of items in the cart and calculate the total amount spent on those items.
Modal Slice:

Purpose: Handles the visibility of the cart modal.
How: Manages whether the cart modal is open or closed. You can toggle this state when the user wants to view their cart.
Selectors: You can check whether the modal is open or closed.
Counter Slice:

Purpose: Manages individual product quantities in the cart.
How: It keeps track of how many of each product the user wants to buy. You can increase or decrease the quantity and reset it if needed.
Selectors: You can get the current quantity of a specific product.
In simple terms, the Cart Slice handles what's in the cart, the Modal Slice deals with showing or hiding the cart view, and the Counter Slice manages how many of each product you want. Together, these slices make sure your app knows what's in the cart, how much it costs, and provides a user-friendly way to interact with it.






