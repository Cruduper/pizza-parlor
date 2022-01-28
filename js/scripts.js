function Cart() {
  pizzas = {};
  grandTotal = 0;
}


Cart.prototype.addPizza = function( pizza ) {
  this.pizzas.push(pizza);
}

function Pizza()  {
  toppings = {};
  pizzaPrice = 0;
  size = "";
}

Pizza.prototype.addTopping = function( topping )  {
  this.toppings.push(topping);
};

Pizza.prototype.addSize = function( size )  {

};

Pizza.prototype.calcPrice = function()  {

}

function Topping(toppingListElem)  {
  this.name = toppingListElem[0];
  this.toppingPrice = toppingListElem[1];
}


const toppingList = [ ["pepperoni", 3], 
                      ["sausage", 3], 
                      ["mushrooms", 2], 
                      ["peppers", 2], 
                      ["car parts", 30] ]





$(document).ready(function() {



});