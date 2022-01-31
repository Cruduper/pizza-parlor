//cart Object and methods
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

//Pizza object and methods
function Pizza()  {
  this.toppings = [];
  this.pizzaPrice = 0;
  this.size = ["small", 10];
  this.deleted = false;
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

//Topping object
function Topping(toppingListElem)  {
  this.name = toppingListElem[0];
  this.toppingPrice = toppingListElem[1];
}

//UI Logic 
function displayCurToppings() {
  $("#pizzaDetails").html("<p><strong>New Pizza's Toppings</strong></p>");
  $("#pizzaDetails").append('<p id="curToppings"></p>');

  tempToppings.forEach( function(topping) {
    if (topping[0] != "deleted")  {
      $("#pizzaDetails p#curToppings").append( topping[0] + ", " );
    }
  });
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
    if (pizza.deleted === false)  {
      $("#pizzasInCart").append( '<p id="' + id + '"> pizza #' + (id+1) + ' --- $' + pizza.pizzaPrice + '</p>');
      totalCost += pizza.pizzaPrice;
    }
  });
  
  $("#totalNumber").text(totalCost);
}

function displayToppingImages() {
  tempToppings.forEach( function(topping) {
    if( topping[0] != "deleted")
      $("#" + topping[0] ).show();
  });
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
                      ["motor-oil", 13],
                      ["mystery", 20] ]

const sizeList =    [ ["small", 10],
                      ["medium", 14],
                      ["large", 18]   ]

let cart = new Cart();
let tempToppings = [];
let tempSize = ["small", 10];
let toppingIncrement = 0;

$(document).ready(function() {


  //change size
  $("#size").on('change', function()  {
    tempSize = sizeList[ parseInt( $('input[name="pizzaSize"]:checked').val()) ];
  });

  //select topping
  $("#toppingSelect").on('change', function() {
    if ( ($(this).val() != "none" ) && ( $(this).val() != "deleted")  )  {

      let curToppingCount = 0;

      tempToppings.forEach( function(topping){
        if (topping[0] != "deleted")  {
          curToppingCount++;
        }
      });

      if (curToppingCount <= 12)  {
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
    displayCurToppings();
    displayToppingImages();
    $("select").prop('selectedIndex',0); 
  });


  //delete topping
  $("#deleteToppingSelect").on('change', function() {
    const selectedOption = "#deleteToppingSelect option:selected";

    if ( ($(this).val() != "none") && ($(this).val() != "deleted") )  {
      tempToppings[$(selectedOption).val()][0] = "deleted";
      $(selectedOption).remove();
    }
    displayCurToppings();
  });

  //click button to add pizza
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
    $("#pizzaDetails").html("");

    if (cart.pizzas.length > 0) {
      $("button#submitPizza").html("Add ANOTHER pizza!");
    }
    else  {
      $("button#submitPizza").html("Add this pizza!");
    }
  });

  //click on a pizza in the cart
  $("#pizzasInCart").on('click', "p", function() {
    pizzaId = parseInt( $(this).attr("id") );
    displayPizzaDetails( cart.pizzas[pizzaId], pizzaId );
  });

  //click delete button in pizza details window
  $("#pizzaDetails").on('click', "button", function() {
    cart.pizzas[this.id].deleted = true;
    $("#pizzaDetails").html("");
    displayCart();
  })
});