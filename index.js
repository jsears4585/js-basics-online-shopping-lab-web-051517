var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function addToCart(item) {
  var obj = {[item]: getRandom(1, 101)};
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function cartJoiner(arr) {
  var len = arr.length;
  if (len === 1) {
    return arr[0];
  } else if (len === 2) {
    return arr.join(" and ");
  } else {
    var last = arr.pop();
    arr.push(`and ${last}`);
    return arr.join(", ");
  }
}

function viewCart() {
  var arr = [];
  var intro = "In your cart, you have";
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
  } else {
    Object.values(cart).forEach(function(el) {
      for (var key in el) {
        arr.push(`${key} at $${el[key]}`);
      }
    })
    var line = cartJoiner(arr);
  }
  console.log(`${intro} ${line}.`);
}

function total() {
  var total = 0;
  Object.values(cart).forEach(function(el) {
    for (var key in el) { total += el[key]; }
  })
  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (key === item) {
        var index = i;
        return cart.splice(index, 1);
      }
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don\'t have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
