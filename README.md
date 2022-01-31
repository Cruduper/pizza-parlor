# _Pizza Parlor_

#### By _**Eric Crudup**_

#### _A mock ordering form for ordering multiple pizzas from a pizza parlor_ [SITE LINK](https://cruduper.github.io/pizza-parlor)

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _jQuery_
* _Bootstrap_


## Setup/Installation Requirements

* clone this repository to your local machine using git
* from the git directory you downloaded, navigate to the top level directory 
* open the .index.html file in a modern web browser

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
* _submit button says "add ANOTHER Pizza" even after deleting all previous pizzas from cart_

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) _2022_  _Eric Crudup_