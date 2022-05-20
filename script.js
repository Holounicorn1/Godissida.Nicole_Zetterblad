/*skapar en array som inneholler alla producter*/

function displayShoppingCart() {
  var orderedProductsTblBody = document.getElementById(
    "orderedProductsTblBody"
  );
  /*Säkerställer att all tidigare information raderas ur tabellen*/
  while (orderedProductsTblBody.rows.length > 0) {
    orderedProductsTblBody.deleteRow(0);
  }

  var shoppingCart = JSON.parse(localStorage.getItem("varukorg"));

  console.log(shoppingCart);

  //variabeln som innehåller slutsumman
  var cart_total_price = 0;
  for (var product in shoppingCart) {
    var row = orderedProductsTblBody.insertRow();
    //Skapar dom tre cellerna för producten
    var cellName = row.insertCell(0);
    var cellDescription = row.insertCell(1);
    var cellPrice = row.insertCell(2);
    cellPrice.align = "right";
    cellName.innerHTML = shoppingCart[product].Name;
    cellDescription.innerHTML = shoppingCart[product].Description;
    cellPrice.innerHTML = shoppingCart[product].Price;
    cart_total_price += shoppingCart[product].Price;
  }
  /*Skapar den totala prissumman av alla producter*/
  document.getElementById("cart_total").innerHTML = cart_total_price;
}

function AddtoCart(name, description, price) {
  /*skapa en produvt (namn, beskrivning, pris)*/
  var singleProduct = {};
  singleProduct.Name = name;
  singleProduct.Description = description;
  singleProduct.Price = price;
  /*lägger till varan i varukorgen*/
  var shoppingCart = JSON.parse(localStorage.getItem("varukorg"));
  if (shoppingCart == null) {
    shoppingCart = [];
  }

  shoppingCart.push(singleProduct);
  localStorage.setItem("varukorg", JSON.stringify(shoppingCart));
  /*Kallar på funktione så att den syns på hemsidan*/
  displayShoppingCart();
}
console.log(orderedProductsTblBody);
displayShoppingCart();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
