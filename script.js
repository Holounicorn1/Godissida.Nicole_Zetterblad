/*skapar en array som inneholler alla producter*/

function displayShoppingCart() {
  var orderedProductsTblBody = document.getElementById(
    "orderedProductsTblBody"
  );
  //ensure we delete all previously added rows from ordered products table
  while (orderedProductsTblBody.rows.length > 0) {
    orderedProductsTblBody.deleteRow(0);
  }

  var shoppingCart = JSON.parse(localStorage.getItem("varukorg"));

  console.log(shoppingCart);

  //variabeln som inneholler slutsumman
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
  //fill total cost of our shopping cart
  document.getElementById("cart_total").innerHTML = cart_total_price;
}

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
