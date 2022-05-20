/*skapar en array som inneholler alla producter*/

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
}
/*navbaren*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
