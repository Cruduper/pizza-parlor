function Cart() {
  this.pizzas = [];
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
  this.toppings = [];
  this.pizzaPrice = 0;
  this.size = ["small", 10];
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





function resetPizza()  {
  tempToppings = [];
  toppingIncrement = 0;
  $("#deleteToppingSelect").children('option:not([value="none"])').remove();

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
let tempToppings = [];
let tempSize = ["small", 10];
let toppingIncrement = 0;

$(document).ready(function() {


  $("#size").on('change', function()  {
    tempSize = sizeList[ parseInt( $('input[name="pizzaSize"]:checked').val()) ];
  });

  $("#toppingSelect").on('change', function() {
    if ( ($(this).val() != "none") && ($(this).val() != "deleted")  )  {
      const indexNum = parseInt( $(this).val() );
      index0 = toppingList[indexNum][0];
      index1 = toppingList[indexNum][1];
      tempToppings.push([index0, index1]);
      
      $("#deleteToppingSelect").append($('<option>', {
          value: toppingIncrement,
          text: tempToppings[toppingIncrement][0]
        }

      ));
      toppingIncrement++;
    }
  });

  $("#deleteToppingSelect").on('change', function() {
    // start = parseInt($(this).val());
    // tempToppings.splice( start, 1 ); 
    

    // [attribute='value']
    // :focus
    // :selected

    const selectedOption = "#deleteToppingSelect option:selected";

    if ( ($(this).val() != "none") && ($(this).val() != "deleted") )  {
      tempToppings[$(selectedOption).val()][0] = "deleted";
      $(selectedOption).remove();
    }
    
  });



  $("button#submitPizza").click( function(){
    let tempPizza = new Pizza();
    
    tempToppings.forEach( function(topping) {
      if (topping[0] != "deleted")  {
        tempPizza.addTopping( [topping[0], topping[1]] );
      }
    });
    tempPizza.size = [ tempSize[0], tempSize[1] ];
    cart.pizzas.push(tempPizza);
    resetPizza();
  });
});