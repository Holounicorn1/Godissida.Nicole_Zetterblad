//create array that will hold all ordered products

function AddtoCart(name, description, price) {
  //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
  var singleProduct = {};
  //Fill the product object with data
  singleProduct.Name = name;
  singleProduct.Description = description;
  singleProduct.Price = price;
  //Add newly created product to our shopping cart
  var shoppingCart = JSON.parse(localStorage.getItem("varukorg"));
  if (shoppingCart == null) {
    shoppingCart = [];
  }

  shoppingCart.push(singleProduct);
  localStorage.setItem("varukorg", JSON.stringify(shoppingCart));
  //call display function to show on screen
  displayShoppingCart();
}
console.log(orderedProductsTblBody);
//Add some products to our shopping cart via code or you can create a button with onclick event
displayShoppingCart();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
