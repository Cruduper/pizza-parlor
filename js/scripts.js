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
                      ["carparts", 30],
                      ["mystery topping", 50] ]

const sizeList =    [ ["small", 10],
                      ["medium", 14],
                      ["large", 18]   ]



let cart = new Cart();
let tempPizza = new Pizza();
let tempToppings = [];
let tempSize = ["small", 10];

$(document).ready(function() {

  // $("#toppingSelect").attr('selected', true)
  // $( "#myselect option:selected" ).text()
  $("#toppingSelect").on('change', function() {
    //tempToppings.push(parseInt( this.val() ));
    const indexNum = parseInt( $(this).val() );
    const tempArr = toppingList[indexNum];
    tempToppings.push(tempArr);

  });

  $("#size").on('change', function()  {
    tempSize = sizeList[ parseInt( $('input[name="pizzaSize"]:checked').val()) ];
  });

  $("button#submitPizza").click( function(){
    tempToppings.forEach( function(topping) {
      tempPizza.addTopping(toppingList[ topping ])
    });
    tempPizza.size = tempSize
    cart.pizzas.push(tempPizza);
  });



});