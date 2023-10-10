const product = [
  {
    id: 0,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/television/j/l/3/-original-imagtwtewzgfnvjp.jpeg?q=70",
    title: "MOTOROLA EnvisionX 140 cm (55 inch) QLED Ultra HD",
    price: 120,
  },
  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/television/q/9/l/-original-imagu4364qh4huyj.jpeg?q=70",
    title: "Mi X Series 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV 20.",
    price: 60,
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRlPcGgTY2QBY_FBYYxDKft5lI5quKm6piwl0ZyVq7q9qjK6ou-y0CxzZs_pumEEWm1KU1JLgGe2CxeA3bIwsnkB4q3ofVOP-Bs7HPwlTWPQypseeHzAaBg&usqp=CAE",
    title: "Samsung (43) CUE60 Crystal 4K UHD Smart TV",
    price: 230,
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTrase7WAsameYVjxUuH1S-0h3eypLJVWydC3ev_kCULbc3323MSfnFkNvnqRMHaQLFUGMEonz_sP8ZMBuTfMyp6FoXeLngxR3EBfWHEFCh&usqp=CAE",
    title: "Acer 139 cm (55 inches) I Series 4K Ultra HD Android Smart LED TV",
    price: 100,
  },
];

let i = 0;
document.getElementById("root").innerHTML = product
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
              <div class='img-box'>
                  <img class='images' src=${image}></img>
              </div>
          <div class='bottom'>
          <p>${title}</p>
          <h2>$ ${price}.00</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
          </div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...product[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "$ " + total + ".00";
        return (
          `<div class='cart-item'>
                  <div class='row-img'>
                      <img class='rowimg' src=${image}>
                  </div>
                  <p style='font-size:12px;'>${title}</p>
                  <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
