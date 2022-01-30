function Cart() {
  this.pizzas = [];
  this.grandTotal = 0;
}


Cart.prototype.addPizza = function(pizza) {
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

Pizza.prototype.addTopping = function(topping)  {
  this.toppings.push(topping);
};

Pizza.prototype.addSize = function(size)  {
  this.size = size;
};

Pizza.prototype.calcPizzaPrice = function()  {
  this.pizzaPrice = 0;
  let tempPrice = 0;
  this.toppings.forEach( function(topping){
    tempPrice += topping[1];
  });
  this.pizzaPrice = tempPrice;
  this.pizzaPrice += this.size[1];
};

function Topping(toppingListElem)  {
  this.name = toppingListElem[0];
  this.toppingPrice = toppingListElem[1];
}



function displayPizzaDetails(pizza, id) {
  $("#pizzaDetails").html("");
  
  $("#pizzaDetails").html('<p id="' + id + '"><strong>Pizza #' + (id+1) + ':</strong> &nbsp;&nbsp; $' + pizza.pizzaPrice + ' &nbsp;&nbsp;&nbsp;&nbsp; <button id="' 
    + id + '" type="button">DELETE</button></p>');
    $("#pizzaDetails").append('<p id="toppings"><strong>TOPPINGS:</strong> ');
  pizza.toppings.forEach( function(topping, index) {
    $("#pizzaDetails p#toppings").append( topping[0] );
    if ( index < (pizza.toppings.length - 1) ) {
      $("#pizzaDetails p#toppings").append( ", ");
    }
  });
  $("#pizzaDetails p#toppings").append("<br><strong>SIZE:</strong> " + pizza.size[0]);
}

function displayCart()  {
  let totalCost = 0;
  $("#pizzasInCart").html("")
  cart.pizzas.forEach( function(pizza, id) {
    $("#pizzasInCart").append( '<p id="' + id + '"> pizza #' + (id+1) + ' --- $' + pizza.pizzaPrice + '</p>');
    totalCost += pizza.pizzaPrice;
  });
  
  $("#totalNumber").text(totalCost);
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
    if ( ($(this).val() != "none" ) && ( $(this).val() != "deleted")  )  {
      if (tempToppings.length <= 12)  {
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
      else  {
        alert ("that's WAY too many toppings, 13 is the limit, brother!");
      }
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

  $("button#submitPizza").click( function() {
    let tempPizza = new Pizza();
    
    tempToppings.forEach( function(topping) {
      if (topping[0] != "deleted")  {
        tempPizza.addTopping( [topping[0], topping[1]] );
      }
    });
    tempPizza.size = [ tempSize[0], tempSize[1] ];
    tempPizza.calcPizzaPrice();
    cart.pizzas.push(tempPizza);
    resetPizza();
    displayCart();
  });

  // $("div#pizzasInCart").on("click", "p", function() {
  //   displayPizzaDetails( this.attr("id") );
  // });

  $("#pizzasInCart").on('click', "p", function() {
    pizzaId = parseInt( $(this).attr("id") );
    displayPizzaDetails( cart.pizzas[pizzaId], pizzaId );
  });

  $("#pizzaDetails").on('click', "button", function() {
    console.log("you clicked DELETE!");
  })
});