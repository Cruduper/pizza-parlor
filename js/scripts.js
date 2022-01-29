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





function displayToppingsToDelete(toppingsToDelete, increment)  {
  $("#toppingsToDelete").text("")
  toppingsToDelete.forEach( function(topping) {
  });
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
let toppingsToDelete = [];
let tempSize = ["small", 10];
let toppingIncrement = 0;

$(document).ready(function() {


  $("#size").on('change', function()  {
    tempSize = sizeList[ parseInt( $('input[name="pizzaSize"]:checked').val()) ];
  });

  $("#toppingSelect").on('change', function() {
    if ( $(this).val() != "none" )  {
      const indexNum = parseInt( $(this).val() );
      const tempArr = toppingList[indexNum];
      tempToppings.push(tempArr);
      toppingsToDelete.push(tempArr);
      //$("#toppingsToDelete").html( "<option value=" + toppingIncrement +">" + toppingsToDelete[toppingIncrement][0] + "</option>" );
      $("#deleteToppingSelect").append($('<option>', {
          value: toppingIncrement,
          text: toppingsToDelete[toppingIncrement][0]
        }
      ));
      toppingIncrement++;
    }
  });

  $("#deleteToppingSelect").on('change', function() {
    start = parseInt($(this).val())-1
    let tempArr = tempToppings.slice( start, start ); 
    tempToppings = tempArr;
  });



  $("button#submitPizza").click( function(){
    tempToppings.forEach( function(topping) {
      tempPizza.addTopping(toppingList[ topping ])
    });
    tempPizza.size = tempSize
    cart.pizzas.push(tempPizza);
  });



});