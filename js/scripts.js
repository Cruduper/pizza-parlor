function Cart() {
  this.pizzas = {};
  this.grandTotal = 0;
}


Cart.prototype.addPizza = function( pizza ) {
  this.pizzas.push(pizza);
};

Cart.prototype.calcCartPrice = function() {
  this.grandTotal = 0;
  this.pizzas.forEach( function(pizza){
    this.grandTotal += pizza.pizzaPrice;
  });
  
  return this.grandTotal;
};

function Pizza()  {
  this.toppings = {};
  this.pizzaPrice = 0;
  this.size = ["", 0];
}

Pizza.prototype.addTopping = function( topping )  {
  this.toppings.push(topping);
};

Pizza.prototype.addSize = function( size )  {
  this.size = size;
};

Pizza.prototype.calcPizzaPrice = function()  {
  this.pizzaPrice = 0;

  this.toppings.forEach( function(topping){
    this.pizzaPrice += topping[1];
  });
  this.pizzaPrice += this.size[1];

  return this.pizzaPrice;
};

function Topping(toppingListElem)  {
  this.name = toppingListElem[0];
  this.toppingPrice = toppingListElem[1];
}


const toppingList = [ ["pepperoni", 3], 
                      ["sausage", 3], 
                      ["mushrooms", 2], 
                      ["peppers", 2], 
                      ["car parts", 30]
                      ["mystery topping", 50] ]





$(document).ready(function() {
  $("")


});