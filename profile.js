document.addEventListener("DOMContentLoaded", function() {
 let user = JSON.parse(localStorage.getItem("loggedInUser"));
 if (!user) {
  alert("Please log in first!");
  window.location.href = "login.html";
 } else {
  document.getElementById("user-name").innerText = user.name;
  document.getElementById("user-email").innerText = user.email;
 }
 
 let orders = JSON.parse(localStorage.getItem("orders")) || [];
 let userOrders = orders.filter(order => order.email === user.email);
 let orderList = document.getElementById("order-history");
 
 userOrders.forEach(order => {
  let listItem = document.createElement("li");
  listItem.textContent = `Order #${order.id} - ${order.status}`;
  orderList.appendChild(listItem);
 });
});

function logout() {
 localStorage.removeItem("loggedInUser");
 window.location.href = "login.html";
}