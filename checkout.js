document.addEventListener("DOMContentLoaded", function() {
 let cart = JSON.parse(localStorage.getItem("cart")) || [];
 let summaryList = document.getElementById("order-summary");
 
 cart.forEach(product => {
  let listItem = document.createElement("li");
  listItem.textContent = `${product.name} - $${product.price}`;
  summaryList.appendChild(listItem);
 });
});

function placeOrder() {
 let user = JSON.parse(localStorage.getItem("loggedInUser"));
 if (!user) {
  alert("Please log in to place an order.");
  return;
 }
 
 let orders = JSON.parse(localStorage.getItem("orders")) || [];
 let cart = JSON.parse(localStorage.getItem("cart")) || [];
 
 let newOrder = {
  id: orders.length + 1,
  email: user.email,
  items: cart,
  status: "Processing"
 };
 
 orders.push(newOrder);
 localStorage.setItem("orders", JSON.stringify(orders));
 localStorage.removeItem("cart");
 
 alert("Order placed successfully!");
 window.location.href = "profile.html";
}