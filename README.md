# _Pizza Parlor_

#### By _**Eric Crudup**_

#### _A mock ordering form for ordering multiple pizzas from a pizza parlor_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _jQuery_
* _Bootstrap_


## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Test

### Describe: Topping()

* Test: "It should construct a Topping object with name and price properties"
* Code:   
  let topping1 = new Topping(["pepperoni", 3]);
* Expected Output: { name: "pepperoni", price: 3}


### Describe: Pizza()   

* Test: "It should construct a Pizza object with default toppings and price"   
* Code:
  let pizza1 = new Pizza();   
* Expected Output: { toppings: {}, pizzaPrice: 0, size: ""}

### Describe: Pizza.prototype.addTopping()

* Test: "It should add a Topping object at the end of the toppings array in a Pizza object"      
* Code: pizza1.addTopping( topping )   
* Expected Output: { pizza1.toppings[ ..., ...., topping ] }  

### Describe: Pizza.prototype.addSize()

* Test: "It should take a string argument set this.size to that argument"    
* Code: pizza.addSize("large")    
* Expected Output: {pizza1.size: "large"}   


### Describe: Cart()

* Test: "It should construct a Cart object with pizzas and grand total price"  
* Code: let cart1 = Cart()    
* Expected Output: { pizzas: {}, grandTotal: 0 }     
   

### Describe: Cart.prototype.addPizza()

* Test: "It should add a pizza object to the Cart object"     
* Code: cart1.addPizza( pizza1 )    
* Expected Output: { cart1.pizzas: [..., ..., pizza1] }     

### Describe: Pizza.prototype.calcPizzaPrice()  

* Test: "It should add up the price of all toppings, and size price modifier"     
* Code: pizza1.calcPizzaPrice()
* Expected Output: { pizza1.pizzaPrice: (this.toppings[0][1] + this.toppings[1][1] + this.toppings[2][1] + ...) + size[1] }     


### Describe: Cart.prototype.calcCartPrice()
* Test: "It should add up the price of all pizzas in cart"    
* Code: cart1.calcCartPrice();     
* Expected Output: { cart.grandTotal: this.pizzas[0].pizzaPrice + this.pizza[1].pizzaPrice + ... + }     
    

## Known Bugs

* _Site is not very responsive to different screen sizes_
* _Pizza # displayed in cart and in pizzaDetails box includes deleted pizzas in its increment_

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) _2022_  _Eric Crudup_