document.addEventListener("DOMContentLoaded", function() {
 let cart = JSON.parse(localStorage.getItem("cart")) || [];
 let cartList = document.getElementById("cart-items");
 let total = 0;
 
 cart.forEach((product, index) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${product.name} - $${product.price} 
            <button onclick="removeFromCart(${index})">Remove</button>`;
  cartList.appendChild(listItem);
  total += parseFloat(product.price);
 });
 
 document.getElementById("cart-total").innerText = total.toFixed(2);
});

function removeFromCart(index) {
 let cart = JSON.parse(localStorage.getItem("cart")) || [];
 cart.splice(index, 1);
 localStorage.setItem("cart", JSON.stringify(cart));
 location.reload();
}

function checkout() {
 window.location.href = "checkout.html";
}