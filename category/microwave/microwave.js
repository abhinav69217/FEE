const product = [
  {
    id: 0,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSYXzcg4j0rtS0VJEWFNlTaYI5Bv5Kcb3xC-uEvoLtGxV1Xpbt3EmbRtmHydQIU6j4YpRxuRNACa-1LjK8aZDY9INpRn_nmBSQNxIr1rPfxsl3yBpSJG_lBx2PtNh2fQCTaEl48tcg&usqp=CAc",
    title: "Bajaj",
    price: 120,
  },
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTVWaAFe5wDKrECMkkEI_t5-VtuIVt1xPAIkJ0glZ49Fd0ABqDEQ0rytK1DphWMgx0lLUyzMIvJOwriX48XIt56vS_SE8DGYVO1VEt9KbgiuinnilV62xwTtExPZrOB-bNN-Ru_GXw&usqp=CAc",
    title: "Panasonic",
    price: 60,
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTVWaAFe5wDKrECMkkEI_t5-VtuIVt1xPAIkJ0glZ49Fd0ABqDEQ0rytK1DphWMgx0lLUyzMIvJOwriX48XIt56vS_SE8DGYVO1VEt9KbgiuinnilV62xwTtExPZrOB-bNN-Ru_GXw&usqp=CAc",
    title: "Panasonic",
    price: 100,
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSYXzcg4j0rtS0VJEWFNlTaYI5Bv5Kcb3xC-uEvoLtGxV1Xpbt3EmbRtmHydQIU6j4YpRxuRNACa-1LjK8aZDY9INpRn_nmBSQNxIr1rPfxsl3yBpSJG_lBx2PtNh2fQCTaEl48tcg&usqp=CAc",
    title: "Bajaj ",
    price: 230,
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
