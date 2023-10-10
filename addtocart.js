const product = [
  {
    id: 0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61KdrPjn3bEL8YrnVRgb1BGCmg_SaHdvBWQ&usqp=CAU",
    title: "Z Flip Foldable Mobile",
    price: 120,
  },
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1346147559/photo/modern-wireless-bluetooth-headphones-with-charging-case-on-a-blue-background.webp?b=1&s=170667a&w=0&k=20&c=BYU1Hus6DkSaivEEZ5xLGschmpFr1j-M-IPfjYoJQ7s=",
    title: "Air Pods Pro",
    price: 60,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1635197861468-995a297e26c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MjUwRCUyMERTTFIlMjBDYW1lcmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    title: "250D DSLR Camera",
    price: 230,
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1679865289918-b21aae5a9559?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGVhZCUyMFBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Head Phones",
    price: 100,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Smartwatch",
    price: 80,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1662830857519-2f9b28e3b4ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V2lyZWxlc3MlMjBLZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Wireless Keyboard",
    price: 25,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qmx1ZXRvb3RoJTIwU3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Bluetooth Speaker",
    price: 45,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1623934199716-dc28818a6ec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2FtaW5nJTIwTGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    title: "Gaming Laptop",
    price: 1200,
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    title: "Tablet",
    price: 200,
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c21hcnQlMjB0dnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Smart TV",
    price: 450,
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
                <p style='font-size:8px;'>${title}</p>
                <h2 style='font-size: 10px;'>$ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
